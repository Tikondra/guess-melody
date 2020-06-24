const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `music/bensound-adaytoremember.mp3`,
        genre: `rock`,
      }, {
        src: `music/bensound-summer.mp3`,
        genre: `blues`,
      }, {
        src: `music/bensound-psychedelic.mp3`,
        genre: `jazz`,
      }, {
        src: `music/bensound-happyrock.mp3`,
        genre: `rock`,
      }
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `music/bensound-rumble.mp3`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`,
      }, {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      }, {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      }
    ]
  }
];
