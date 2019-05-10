import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Smells like teen spirit",
      duration: "3:35"
    },
    { title: "Macarena", duration: "2:40" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
