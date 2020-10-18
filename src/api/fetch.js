async function customFetch(input, init) {
  try {
    const response = await fetch(input, init);
    if (!response.ok) {
      throw response;
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

customFetch.post = (input, init) =>
  customFetch(input, {
    ...init,
    method: 'POST',
    headers: {
      ...init.headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(init.body),
  });

export default customFetch;
