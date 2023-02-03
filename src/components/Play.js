import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Play({
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSongs,
  setSongs,
}) {
  const [info, setInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    const newsongs = songs.map((item) => {
      if (item.id === currentSong.id) {
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
  }, [currentSong]);

  const audioRef = useRef(null);

  const playSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const currentInfo = (e) => {
    
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
   
    setInfo({ ...info, currentTime, duration });
    if(currentTime===duration){
      if (currentIndex === songs.length - 1) {
        setCurrentSongs(songs[0]);
      } else {
        setCurrentSongs(songs[currentIndex + 1]);
      }
      playSong()

    }
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setInfo({ ...info, currentTime: e.target.value });
  };
  function formatTime(seconds) {
    const format = (val) => `0${Math.floor(val)}`.slice(-2);

    const minutes = (seconds % 3600) / 60;

    return [minutes, seconds % 60].map(format).join(":");
  }
  const skipSong = (direction) => {
    const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
    if (direction === "back") {
      if (currentIndex === 0) {
        setCurrentSongs(songs[songs.length - 1]);
      } else {
        setCurrentSongs(songs[currentIndex - 1]);
      }
    }
    if (direction === "next") {
      if (currentIndex === songs.length - 1) {
        setCurrentSongs(songs[0]);
      } else {
        setCurrentSongs(songs[currentIndex + 1]);
      }
    }
  };

  let icon = isPlaying ? faPause : faPlay;
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(info.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={info.duration}
          value={info.currentTime}
          type="range"
        />
        <p>{formatTime(info.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipSong("back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSong}
          className="play"
          size="3x"
          icon={icon}
        />
        <FontAwesomeIcon
          onClick={() => skipSong("next")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onLoadedMetadata={currentInfo}
        onTimeUpdate={currentInfo}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default Play;
