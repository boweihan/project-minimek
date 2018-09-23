import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "semantic-ui-css/semantic.css";

import registerServiceWorker from "./registerServiceWorker";

import configureStore from "./store/configureStore";
const store = configureStore();

// save a ref to the root element
const rootEl = document.getElementById("root");

let render = () => {
  const App = require("./app/layout/App").default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = error => {
    const RedBox = require("redbox-react").default;
    ReactDOM.render(<RedBox error={error} />, rootEl);
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      console.error(error);
      renderError(error);
    }
  };

  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();
registerServiceWorker();
