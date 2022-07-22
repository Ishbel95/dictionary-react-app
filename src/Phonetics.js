import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  const audio = new Audio(props.phonetics.audio);
  function play() {
    audio.play();
  }
  return (
    <div className="Phonetics">
      <span>
        <button onClick={play} className="content btn me-3">
          Listen
        </button>
      </span>
      <span className="content ">{props.phonetics.text}</span>
    </div>
  );
}
