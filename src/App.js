import "./components/styles/app.scss";
import Play from "./components/Play";
import Song from "./components/Song";
import { musicData } from "./data";
import { useState } from "react";
import SongsList from "./components/SongsList";
import ToggleList from "./components/ToggleList";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(songs[0]);
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <ToggleList setDisplay={setDisplay} display={display} />

      <Song currentSong={currentSong} />
      <Play
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSongs={setCurrentSongs}
        setSongs={setSongs}
      />
      <SongsList
        songs={songs}
        setCurrentSongs={setCurrentSongs}
        setSongs={setSongs}
        display={display}
      />
    </div>
  );
}

export default App;
