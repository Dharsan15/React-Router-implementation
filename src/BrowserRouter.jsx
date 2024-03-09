import { createContext, useState } from "react";

const BrowserContext = createContext();

function BrowserRouter({ children }) {
  const [currentUrl, setCurrentURL]= useState(new URL(window.location.href));

  return (
    <>
      <BrowserContext.Provider value={{ currentUrl, setCurrentURL }}>
        {children}
      </BrowserContext.Provider>
    </>
  );
}

export default BrowserRouter;

export { BrowserContext };
