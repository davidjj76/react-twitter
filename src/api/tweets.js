import fetch from './fetch';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;
const tweetsBaseUrl = `${BASE_URL}/api/v1/tweets`;

export const getLatestTweets = () => {
  const url = `${tweetsBaseUrl}?_expand=user&_embed=likes`;
  return fetch(url);
};
