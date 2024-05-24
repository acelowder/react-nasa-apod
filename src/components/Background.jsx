import { useNASAContext } from "../contexts/useNASAContext";
import "./Background.css";

export function Background({}) {
  const { data } = useNASAContext();

  return (
    <div className="hero">
      <img src={data?.hdurl} className="bg-image" />
      <div className="bg-gradient"></div>
    </div>
  );
}
