import React from 'react';
import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { TweetsPage, NewTweetPage, TweetPage } from '../tweets';
import { LoginPage, PrivateRoute } from '../auth';

class App extends React.Component {
  state = { loggedUserId: this.props.loggedUserId };

  handleLogin = auth => {
    // const { onLogin } = this.props;
    this.setState({ loggedUserId: auth.id });
    // onLogin(auth);
  };

  handleLogout = () => {
    // const { onLogout } = this.props;
    this.setState({ loggedUserId: null });
    // onLogout();
  };

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

App.propTypes = {
  // onLogin: T.func.isRequired,
  // onLogout: T.func.isRequired,
  loggedUserId: T.string,
};

App.defaulProps = {
  loggedUserId: null,
};

export default App;
