import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Render Welcome-screen`, function () {
  const tree = renderer
    .create(
        <WelcomeScreen
          errorsCount={3}
          time={5}
          onWelcomeButtonClick={jest.fn()}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
