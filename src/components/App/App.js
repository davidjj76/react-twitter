import React from 'react';

import { Header, Main, Footer } from '../layout';
import { LatestTweets } from '../tweets';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header className="app__header bordered" />
      <div className="container">
        <Main className="app__main bordered">
          <LatestTweets />
        </Main>
      </div>
      <Footer className="app__footer bordered" />
    </div>
  );
}

export default App;
