import React from "react";

function SongListItem({ song, setCurrentSongs, songs, setSongs }) {
  const selectHandler = () => {
    const selectedSong = songs.filter((item) => item.id === song.id);
    setCurrentSongs(selectedSong[0]);
    const newsongs = songs.map((item) => {
      if (item.id === song.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setSongs(newsongs);
  };
  return (
    <div
      onClick={selectHandler}
      className={`song-item ${song.active ? "selected " : ""}`}
    >
      <img src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default SongListItem;
