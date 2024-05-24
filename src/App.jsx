import { useState } from "react";
import { Modal } from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <main>
        <img src="spiralgalaxy.jpg" className="bg-image" />
        <div className="bg-gradient"></div>
      </main>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <footer>
        <div>
          <h2>Spiral Galaxy</h2>
          <h1>APOD Project</h1>
        </div>
        <button onClick={() => setShowModal(true)}>i</button>
      </footer>
    </>
  );
}
