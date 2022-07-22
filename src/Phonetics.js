import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span>
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noopener noreferrer"
          className="content "
        >
          Listen
        </a>
      </span>
      <span className="content">{props.phonetics.text}</span>
    </div>
  );
}
