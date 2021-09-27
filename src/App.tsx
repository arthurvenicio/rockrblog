import React from "react";
import { Router } from "./routes";
import GlobalStyles from "./styles/global";
import { ModalProvider } from "./contexts/ModalContext";

function App(): JSX.Element {
  return (
    <>
      <ModalProvider>
        <Router />
        <GlobalStyles />
      </ModalProvider>
    </>
  );
}
export default App;
