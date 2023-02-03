import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function ToggleList({ setDisplay, display }) {
  const displayHandler = () => {
    setDisplay(!display);
  };
  return (
    <nav className="nav">
      <h1>waves</h1>
      <button onClick={displayHandler}>
        song ToggleList
        
        <FontAwesomeIcon icon={faMusic} />
      
      </button>
    </nav>
  );
}

export default ToggleList;
