import { FaCircleInfo } from "react-icons/fa6";

export function Footer({ handleInfoClick }) {
  return (
    <footer>
      <div className="footer-content">
        <h1>Spiral Galaxy</h1>
        <p className="subtitle">ASTRONOMY PICTURE OF THE DAY</p>
      </div>
      <button onClick={handleInfoClick}>
        <FaCircleInfo />
      </button>
    </footer>
  );
}
