import localStorage from '../utils/localStorage';

async function customFetch(input, init = {}) {
  const auth = localStorage.get('auth');
  if (auth) {
    if (!init.headers) {
      init.headers = new Headers();
    }
    init.headers.authorization = `Bearer ${auth.accessToken}`;
  }
  try {
    const response = await fetch(input, init);
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}

customFetch.post = (
  input,
  { body = {}, headers = new Headers(), ...init } = {},
) =>
  customFetch(input, {
    ...init,
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

customFetch.delete = (input, { headers = new Headers(), ...init } = {}) =>
  customFetch(input, {
    ...init,
    method: 'DELETE',
    headers: {
      ...headers,
      'Access-Control-Allow-Origin': '*',
    },
  });

export default customFetch;
