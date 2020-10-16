import React from 'react';

import Tweet from './Tweet';

const tweets = [
  {
    content:
      'Nos hace mucha ilusión anunciar la fecha del ESTRENO de “Eso que tu me das”, documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.',
    id: 'c992f85e-6080-4a5b-ba10-921513396cb4',
    userId: '7250a390-c1b1-4226-b7b6-736de4e23e56',
    createdAt: '2020-10-16T22:58:12.837Z',
    username: '@tweeterman',
    name: 'Tweeter Man',
    likes: 0,
  },
  {
    content: '<h1>Lorem ipsum...<h1>',
    id: '37440bc1-3b71-423e-9e4b-ef9b3ab44a79',
    userId: '7250a390-c1b1-4226-b7b6-736de4e23e56',
    createdAt: '2020-10-14T22:58:12.837Z',
    username: '@tweeterman',
    name: 'Tweeter Man',
    likes: 25,
  },
];

const LatestTweets = () =>
  tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);

export default LatestTweets;
