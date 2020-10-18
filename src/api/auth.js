import fetch from './fetch';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;
const authBaseUrl = `${BASE_URL}/auth`;

export const login = credentials => {
  const url = `${authBaseUrl}/login`;
  return fetch.post(url, { body: credentials });
};
