import React from "react";
import renderer from "react-test-renderer";
import QuestionArtist from "./question-artist";

it(`should render QuestionArtist`, function () {
  const tree = renderer
    .create(
        <QuestionArtist/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
