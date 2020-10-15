import React from 'react';

import { Header, Main, Footer } from '../layout';
import './App.css';

const tweets = [
  {
    content: 'Lorem ipsum...',
    id: 'c992f85e-6080-4a5b-ba10-921513396cb4',
    userId: '7250a390-c1b1-4226-b7b6-736de4e23e56',
    createdAt: '2020-10-14T22:58:12.837Z',
  },
  {
    content: '<h1>Lorem ipsum...<h1>',
    id: '37440bc1-3b71-423e-9e4b-ef9b3ab44a79',
    userId: '7250a390-c1b1-4226-b7b6-736de4e23e56',
    createdAt: '2020-10-15T21:40:20.402Z',
  },
];

const renderTweet = tweet => <article key={tweet.id}>{tweet.content}</article>;

function App() {
  return (
    <div className="app">
      <Header className="app__header bordered" />
      <div className="container">
        <Main className="app__main bordered">{tweets.map(renderTweet)}</Main>
      </div>
      <Footer className="app__footer bordered" />
    </div>
  );
}

export default App;
