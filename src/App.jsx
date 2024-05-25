import { useState, createContext } from "react";
import { NASAProvider } from "./contexts/useNASAContext";
import { Background } from "./components/Background";
import { Modal } from "./components/Modal";
import { Footer } from "./components/Footer";

const NASAContext = createContext();

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <NASAProvider>
      <main>
        <Background />
        <Modal onClose={() => setShowModal(false)} visible={showModal} />
      </main>
      <Footer handleInfoClick={() => setShowModal(true)} />
    </NASAProvider>
  );
}
