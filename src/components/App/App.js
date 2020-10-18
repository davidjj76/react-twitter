import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Main, Footer } from '../layout';
import { LatestTweets } from '../tweets';
import { LoginForm } from '../auth';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header className="app__header bordered" />
      <div className="container">
        <Main className="app__main bordered">
          <Switch>
            <Route path="/" exact>
              <LatestTweets />
            </Route>
            <Route path="/tweet"></Route>
            <Route path="/login">
              <LoginForm className="app__login-form" />
            </Route>
            <Route>Not found</Route>
          </Switch>
        </Main>
      </div>
      <Footer className="app__footer bordered" />
    </div>
  );
}

export default App;
