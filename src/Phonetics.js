import React from "react";
import "./Phonetics.css";
import { Button } from "react-nes-component";

// using props, create new instance of Audio constructor and play that audio onClick
export default function Phonetics(props) {
  const audio = new Audio(props.phonetics.audio);
  function play() {
    audio.play();
  }
  return (
    <div className="Phonetics">
      <span>
        <Button
          onClick={play}
          className="content me-3 phonetics-button"
          type="error"
          title="Phonetics Button"
        >
          Listen
        </Button>
      </span>
      <span className="content ">{props.phonetics.text}</span>
    </div>
  );
}
