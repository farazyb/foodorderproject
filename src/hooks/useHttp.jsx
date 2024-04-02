import { useCallback, useEffect, useState } from "react";
import axios from "axios";

async function sendHttpRequest(url, config) {
  try {
    const response = await axios(url, config);
    console.log(response); // Logging the response data
    if (response.status!== 200) {
        console.log("error")
      throw new Error(
        response.data.message || "Something went wrong, failed to send request."
      );
    }
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throwing the error to be caught by the caller
  }
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
