import { useState } from "react";
import { useFetchNasaData } from "./hooks/useFetchNasaData";
import { Hero } from "./components/Hero";
import { Modal } from "./components/Modal";
import { Footer } from "./components/Footer";

export default function App() {
  const [showModal, setShowModal] = useState(true);
  const data = useFetchNasaData();

  return (
    <>
      <main>
        <Hero />
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </main>
      <Footer handleInfoClick={() => setShowModal(true)} />
    </>
  );
}
