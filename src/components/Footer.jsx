import { useNASAContext } from "../contexts/useNASAContext";
import { FaCircleInfo } from "react-icons/fa6";

export function Footer({ handleInfoClick }) {
  const { data } = useNASAContext();

  return (
    <footer>
      <div className="footer-content">
        <p className="subtitle">ASTRONOMY PICTURE OF THE DAY</p>
        <h1>{data?.title}</h1>
      </div>
      <button onClick={handleInfoClick}>
        <FaCircleInfo />
      </button>
    </footer>
  );
}
