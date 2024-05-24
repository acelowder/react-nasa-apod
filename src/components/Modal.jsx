import { useNASAContext } from "../contexts/useNASAContext";
import { FaCircleXmark } from "react-icons/fa6";
import "./Modal.css";

export function Modal({ onClose }) {
  const { data } = useNASAContext();

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <h2>Description</h2>
          <button onClick={onClose}>
            <FaCircleXmark />
          </button>
        </div>
        <p>{data?.explanation}</p>
        <p>{data?.date}</p>
      </div>
      <div className="modal-overlay" onClick={onClose} />
    </>
  );
}
