import React, { Component } from "react";
import SongListItem from "./SongListItem";

function SongsList({ songs, setCurrentSongs,setSongs,display }) {
  return (
    <div className={`song-list ${!display?'dispalyList':''}`}>
      <h2>SONG LIST</h2>
      <div className="song-list-item">
        {songs.map((song) => {
          return (
            <SongListItem
              key={song.id}
              song={song}
              songs={songs}
              setCurrentSongs={setCurrentSongs}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SongsList;
