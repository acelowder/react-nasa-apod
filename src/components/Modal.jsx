import { FaCircleXmark } from "react-icons/fa6";
import "./Modal.css";

export function Modal({ onClose }) {
  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <h2 title="Spiral Galaxy">Spiral Galaxy</h2>
          <button onClick={onClose}>
            <FaCircleXmark />
          </button>
        </div>
        <p>Image Date</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed et nunc laoreet, vestibulum magna ac, euismod dolor. Sed
          sit amet nunc sit amet lectus malesuada cursus.
        </p>
      </div>
      <div className="modal-overlay" onClick={onClose} />
    </>
  );
}
