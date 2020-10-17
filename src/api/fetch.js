export default async function (input, init) {
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
