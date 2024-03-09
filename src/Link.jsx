import React, { useContext } from "react";
import { BrowserContext } from "./BrowserRouter";

function Link({ children, to }) {
  const { currentUrl, setCurrentURL } = useContext(BrowserContext);

  console.log(currentUrl);

  const handleLink = () => {
    setCurrentURL(new URL(window.location.origin + to));
  };

  return (
    <>
      <a onClick={handleLink}>{children}</a>
    </>
  );
}

export default Link;
