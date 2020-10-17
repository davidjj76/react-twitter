import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Main, Footer } from '../layout';
import { LatestTweets } from '../tweets';
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
            <Route path="/tweet">New Tweet</Route>
            <Route path="/login">Login</Route>
            <Route>Not found</Route>
          </Switch>
        </Main>
      </div>
      <Footer className="app__footer bordered" />
    </div>
  );
}

export default App;
