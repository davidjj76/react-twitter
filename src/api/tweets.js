import fetch from './fetch';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;
const tweetsBaseUrl = `${BASE_URL}/api/v1`;

export const getLatestTweets = () => {
  const url = `${tweetsBaseUrl}/tweets?_expand=user&_embed=likes&_sort=createdAt&_order=desc`;
  return fetch(url);
};

export const createTweet = tweet => {
  const url = `${tweetsBaseUrl}/tweets`;
  return fetch.post(url, { body: tweet });
};

export const createLike = tweetId => {
  const url = `${tweetsBaseUrl}/tweets/${tweetId}/likes`;
  return fetch.post(url);
};

export const deleteLike = likeId => {
  const url = `${tweetsBaseUrl}/likes/${likeId}`;
  return fetch.delete(url);
};
