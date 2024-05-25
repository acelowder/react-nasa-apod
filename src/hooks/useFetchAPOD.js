import { useState, useEffect } from "react";

export function useFetchAPOD() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apikey = import.meta.env.VITE_NASA_API_KEY;
    const today = new Date().toISOString().slice(0, 10);
    const localKey = `nasa-${today}`;

    const fetchLocalData = () => {
      const localData = localStorage.getItem(localKey);
      if (localData) return JSON.parse(localData);
      localStorage.clear();
      return null;
    };

    const cacheData = (data) => {
      localStorage.setItem(localKey, JSON.stringify(data));
    };

    const fetchApiData = async () => {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;
      const response = await fetch(url);
      const apiData = await response.json();
      if (apiData.error) throw new Error(apiData.error.code);
      return apiData;
    };

    const fetchData = async () => {
      const localData = fetchLocalData();
      if (localData) setData(localData);
      else {
        try {
          const apiData = await fetchApiData();
          cacheData(apiData);
          setData(apiData);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  return data;
}
