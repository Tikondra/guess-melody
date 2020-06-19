import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Settings} from "./mocks/constants";
import questions from "./mocks/questions";

const init = () => {
  ReactDOM.render(
      <App
        questions = {questions}
        errorsCount = {Settings.ERROR_COUNT}
        gameTime = {Settings.GAME_TIME}
      />,
      document.querySelector(`#root`)
  );
};

init();
