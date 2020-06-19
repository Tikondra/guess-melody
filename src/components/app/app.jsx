import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";

const welcomeButtonHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  render() {
    const {gameTime, errorCount} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen
              time = {gameTime}
              errorCount = {errorCount}
              onWelcomeButtonClick = {welcomeButtonHandler}
            />
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtist />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenre />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
};

export default App;
