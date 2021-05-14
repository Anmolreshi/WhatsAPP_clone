import { StrictMode } from "react";
import ReactDOM from "react-dom";
import reducer, { intialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider intialState={intialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
