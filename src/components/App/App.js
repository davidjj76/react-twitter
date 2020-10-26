import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { TweetsPage, NewTweetPage, TweetPage } from '../tweets';
import { LoginPage, PrivateRoute } from '../auth';
import localStorage from '../../utils/localStorage';

class App extends React.Component {
  state = { loggedUserId: null };

  handleLogin = ({ id: loggedUserId, accessToken }) => {
    this.setState({ loggedUserId });
    localStorage.set('auth', { loggedUserId, accessToken });
  };

  handleLogout = () => {
    this.setState({ loggedUserId: null });
    localStorage.remove('auth');
    // TODO: Rediect to login
  };

  componentDidMount() {
    const auth = localStorage.get('auth');
    if (auth) {
      this.setState({ loggedUserId: auth.loggedUserId });
    }
  }

  render() {
    const { loggedUserId } = this.state;
    const authProps = {
      loggedUserId,
      onLogout: this.handleLogout,
    };

    return (
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <TweetsPage {...authProps} />
          </Route>
          <Route path="/tweet/:tweetId" exact>
            {({ match }) => (
              <TweetPage {...authProps} tweetId={match.params.tweetId} />
            )}
          </Route>
          <PrivateRoute path="/tweet" exact isLogged={!!loggedUserId}>
            {({ history }) => <NewTweetPage {...authProps} history={history} />}
          </PrivateRoute>
          <Route path="/login" exact>
            {({ history }) => (
              <LoginPage history={history} onLogin={this.handleLogin} />
            )}
          </Route>
          <Route>Not found</Route>
        </Switch>
      </div>
    );
  }
}

export default App;
