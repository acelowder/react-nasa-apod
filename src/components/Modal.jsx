import { useNASAContext } from "../contexts/useNASAContext";
import { FaCircleXmark } from "react-icons/fa6";
import "./Modal.css";

export function Modal({ onClose, visible }) {
  const { data } = useNASAContext();

  return (
    <>
      <div className={`modal ${visible ? "slide-in" : ""}`}>
        <div className="modal-header">
          <h3>Description</h3>
          <button onClick={onClose}>
            <FaCircleXmark />
          </button>
        </div>
        <p className="modal-date">{data?.date}</p>
        <div className="modal-content">
          <p>{data ? data.explanation : "Loading..."}</p>
        </div>
      </div>
      <div
        className={`modal-overlay ${visible ? "fade-in" : ""}`}
        onClick={onClose}
      />
    </>
  );
}
