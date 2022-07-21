import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="subtitles text-capitalize">
        {props.meaning.partOfSpeech}
      </h3>
      <div>
        <p className="content">{props.meaning.definitions[0].definition}</p>
        <em>
          <p className="content">{props.meaning.definitions[0].example}</p>
        </em>
      </div>
    </div>
  );
}
