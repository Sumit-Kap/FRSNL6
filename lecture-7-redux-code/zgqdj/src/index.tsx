import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../src/Store/store";
import App from "./App";

const rootElement = document.getElementById("root");
console.log("print store", store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
