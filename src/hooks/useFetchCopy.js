import { useEffect, useState } from "react";

const usefetchCopy = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (options) => {
      setIsPending(true);

      try {
        const res = await fetch(url, {
          ...options,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setData(data);
        isPending(false);
        setError(null);
      } catch (err) {
        if (err.name === "Aborterror") {
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    if ((method = "GET")) {
      fetchData();
    } else {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, isPending, error, postData };
};
