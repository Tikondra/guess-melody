import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import {Settings} from "./constants";

const init = () => {
  ReactDOM.render(
      <App
        errorCount = {Settings.ERROR_COUNT}
        gameTime = {Settings.GAME_TIME}
      />,
      document.querySelector(`#root`)
  );
};

init();
