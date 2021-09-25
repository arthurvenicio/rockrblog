import React from "react";
import { Router } from "./routes";
import GlobalStyles from "./styles/global";

function App(): JSX.Element {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}
export default App;
