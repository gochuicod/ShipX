import { createContext, useContext, useState } from "react";

const HsCodeContext = createContext();

export function HsCodeProvider({ children }) {
  const [hsCodeResult, setHsCodeResult] = useState(null);

  return (
    <HsCodeContext.Provider
      value={{
        hsCodeResult,
        setHsCodeResult,
      }}
    >
      {children}
    </HsCodeContext.Provider>
  );
}

export const useHsCode = () => useContext(HsCodeContext);
