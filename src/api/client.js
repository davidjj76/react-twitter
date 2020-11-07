import axios from 'axios';

const { REACT_APP_API_BASE_URL: baseURL } = process.env;

// Create axios instance
const client = axios.create({
  baseURL,
});

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

// Login method
client.login = credentials =>
  client.post('/auth/login', credentials).then(auth => {
    // Set Authorization header for future requests
    setAuthorizationHeader(auth.accessToken);
    return auth;
  });

// Logout method
client.logout = () =>
  new Promise(resolve => {
    // Remove Authorization header
    removeAuthorizationHeader();
    resolve();
  });

// Intercepts response
client.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response.data,
    });
  },
);

// Configure client
export const configureClient = accessToken => {
  if (accessToken) {
    setAuthorizationHeader(accessToken);
  }
};

export default client;
