import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [clicked, setClicked] = useState([]);

  function toggleClick(slug) {
    setClicked((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} clicked={clicked} toggleClick={toggleClick} />
    </>
  );
}
