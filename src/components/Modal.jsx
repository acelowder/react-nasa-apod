import { useNASAContext } from "../contexts/useNASAContext";
import { FaCircleXmark } from "react-icons/fa6";
import "./Modal.css";

export function Modal({ onClose }) {
  const { data } = useNASAContext();

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <h3>Description</h3>
          <button onClick={onClose}>
            <FaCircleXmark />
          </button>
        </div>
        <p className="modal-date">{data?.date}</p>
        <div className="modal-content">
          <p>{data?.explanation}</p>
        </div>
      </div>
      <div className="modal-overlay" onClick={onClose} />
    </>
  );
}
