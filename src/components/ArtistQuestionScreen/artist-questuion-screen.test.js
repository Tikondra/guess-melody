import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import {mockArtist} from "../../mocks/for-test";

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={mockArtist}
        onAnswer={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
