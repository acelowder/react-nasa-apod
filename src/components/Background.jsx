import { useNASAContext } from "../contexts/useNASAContext";
import { FaGear } from "react-icons/fa6";
import "./Background.css";

export function Background({}) {
  const { data } = useNASAContext();

  return (
    <div className="hero">
      <div className={`loading ${data ? "fade-out" : ""}`}>
        <FaGear />
      </div>
      <img src={data?.hdurl} className={`bg-image ${data ? "fade-in" : ""}`} />
      <div className="bg-gradient"></div>
    </div>
  );
}
