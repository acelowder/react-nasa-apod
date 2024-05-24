import { createContext, useContext } from "react";
import { useFetchAPOD } from "../hooks/useFetchAPOD";

const NASAContext = createContext();

export const useNASAContext = () => useContext(NASAContext);

export const NASAProvider = ({ children }) => {
  const data = useFetchAPOD();

  return (
    <NASAContext.Provider value={{ data }}>{children}</NASAContext.Provider>
  );
};
