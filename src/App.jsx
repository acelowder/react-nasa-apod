import { useState, useEffect } from "react";
import { Modal } from "./components/Modal";
import { FaCircleInfo } from "react-icons/fa6";

export default function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const NASA_API = import.meta.env.VITE_NASA_API_KEY;
    const today = new Date().toISOString().slice(0, 10);
    const localKey = `NASA-${today}`;

    const fetchLocalData = () => {
      const localData = localStorage.getItem(localKey);
      if (localData) {
        return JSON.parse(localData);
      } else {
        localStorage.clear();
        return null;
      }
    };

    const cacheData = (data) => {
      localStorage.setItem(localKey, JSON.stringify(data));
    };

    const fetchAPIData = async () => {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API}`;

      const response = await fetch(url);
      const apiData = await response.json();
      return apiData;
    };

    const fetchData = async () => {
      const localData = fetchLocalData();
      if (localData) {
        console.log("Local data fetched");
        setData(localData);
        return;
      }

      const apiData = await fetchAPIData();
      if (apiData) {
        console.log("API data fetched");
        console.log(apiData);
        cacheData(apiData);
        setData(apiData);
        return;
      }
    };

    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(data);

  return (
    <>
      <main>
        <div className="hero">
          <img src="spiralgalaxy.jpg" className="bg-image" />
          <div className="bg-gradient"></div>
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </main>
      <footer>
        <div>
          <h1>Spiral Galaxy</h1>
          <p className="subtitle">ASTRONOMY PICTURE OF THE DAY</p>
        </div>
        <button onClick={() => setShowModal(true)}>
          <FaCircleInfo />
        </button>
      </footer>
    </>
  );
}
