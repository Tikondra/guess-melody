import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";
import {mockGenre} from "../../mocks/for-test";

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionScreen
      question={mockGenre.question}
      onAnswer={jest.fn()}
      onChange={jest.fn()}
      renderPlayer={jest.fn()}
      userAnswers={[false, false, false, false]}
    />
  ), {
    createNodeMock: () => ({})
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
