import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { TweetsPage, NewTweetPage, TweetPage } from '../tweets';
import { LoginPage, PrivateRoute } from '../auth';
import localStorage from '../../utils/localStorage';

class App extends React.Component {
  state = { loggedUserId: null };

  handleLoginSuccess = ({ id: loggedUserId, accessToken }) => {
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
    const layoutProps = {
      loggedUserId,
      onLogout: this.handleLogout,
    };

    return (
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <TweetsPage {...layoutProps} />
          </Route>
          <Route path="/tweet/:tweetId" exact>
            {({ match }) => (
              <TweetPage {...layoutProps} tweetId={match.params.tweetId} />
            )}
          </Route>
          <PrivateRoute path="/tweet" exact isLogged={!!loggedUserId}>
            {({ history }) => (
              <NewTweetPage {...layoutProps} history={history} />
            )}
          </PrivateRoute>
          <Route path="/login" exact>
            {({ history }) => (
              <LoginPage
                history={history}
                onLoginSuccess={this.handleLoginSuccess}
              />
            )}
          </Route>
          <Route>Not found</Route>
        </Switch>
      </div>
    );
  }
}

export default App;
