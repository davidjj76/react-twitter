import React from 'react';
import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { TweetsPage, NewTweetPage, TweetPage } from '../tweets';
import { LoginPage, PrivateRoute } from '../auth';

class App extends React.Component {
  state = { loggedUserId: this.props.loggedUserId };

  handleLogin = (loggedUserId, cb) => {
    this.setState({ loggedUserId }, cb);
  };

  handleLogout = () => {
    this.setState({ loggedUserId: null });
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
          {/* Other routes not matching, like a 404 page */}
          <Route>
            <h1 style={{ textAlign: 'center', fontSize: 48 }}>
              404 | Not found page
            </h1>
          </Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  loggedUserId: T.string,
};

App.defaulProps = {
  loggedUserId: null,
};

export default App;
