import { useState } from "react";
import { Modal } from "./components/Modal";
import { FaCircleInfo } from "react-icons/fa6";

export default function App() {
  const [showModal, setShowModal] = useState(true);

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
