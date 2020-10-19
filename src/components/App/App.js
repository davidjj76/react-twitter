import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from '../layout';
import { LatestTweets, NewTweetForm, TweetDetail } from '../tweets';
import { LoginForm, PrivateRoute } from '../auth';
import localStorage from '../../utils/localStorage';
import './App.css';

class App extends React.Component {
  state = { loggedInUserId: null };

  handleLoginSuccess = ({ id: loggedInUserId, accessToken }) => {
    this.setState({ loggedInUserId });
    localStorage.set('auth', { loggedInUserId, accessToken });
  };

  handleLogout = () => {
    this.setState({ loggedInUserId: null });
    localStorage.remove('auth');
  };

  componentDidMount() {
    const auth = localStorage.get('auth');
    if (auth) {
      this.setState({ loggedInUserId: auth.loggedInUserId });
    }
  }

  render() {
    const { loggedInUserId } = this.state;
    return (
      <div className="app">
        <Header
          className="app__header bordered"
          isLoggedIn={!!loggedInUserId}
          onLogout={this.handleLogout}
        />
        <div className="container">
          <main className="app__main bordered">
            <Switch>
              <Route path="/" exact>
                <LatestTweets loggedInUserId={loggedInUserId} />
              </Route>
              <Route path="/tweet/:tweetId" exact component={TweetDetail} />
              <PrivateRoute
                path="/tweet"
                isLoggedIn={!!loggedInUserId}
                component={NewTweetForm}
              />
              <Route path="/login" exact>
                {({ history }) => (
                  <LoginForm
                    history={history}
                    className="app__login-form"
                    onLoginSuccess={this.handleLoginSuccess}
                  />
                )}
              </Route>
              <Route>Not found</Route>
            </Switch>
          </main>
        </div>
        <Footer className="app__footer bordered" />
      </div>
    );
  }
}

export default App;
