import fetch from './fetch';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;

export const getLatestTweets = async () => {
  const url = `${BASE_URL}/tweets?_expand=user&_embed=likes`;
  try {
    const tweets = await fetch(url);
    return tweets;
  } catch (error) {
    throw error;
  }
};
