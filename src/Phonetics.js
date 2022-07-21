import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank">
        Listen
      </a>
      <p>{props.phonetics.text}</p>
    </div>
  );
}
