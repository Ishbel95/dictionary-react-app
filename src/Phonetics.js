import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetics.audio}
        target="_blank"
        rel="noopener noreferrer"
        className="content"
      >
        Listen
      </a>
      <p className="content">{props.phonetics.text}</p>
    </div>
  );
}
