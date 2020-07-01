import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {Settings} from "./constants";
import questions from "./mocks/questions";
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          questions = {questions}
          errorsCount = {Settings.ERROR_COUNT}
          gameTime = {Settings.GAME_TIME}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
