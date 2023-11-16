const useHttp = () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "249ee727-f2a51f04-f217f871-a6a30726",
  };

  const request = async (url, method = "GET", body = null) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return request;
};

export default useHttp;
