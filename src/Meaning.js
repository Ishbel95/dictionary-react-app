import React from "react";
import "./Meaning.css";
import { FontFace, Button, Container } from "react-nes-component";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <Container isDark>
        <h3 className="subtitles text-capitalize">
          {props.meaning.partOfSpeech}
        </h3>
      </Container>
      <Container isDark>
        <div>
          <p className="content">{props.meaning.definitions[0].definition}</p>
          <em>
            <p className="content">{props.meaning.definitions[0].example}</p>
          </em>
        </div>
      </Container>
    </div>
  );
}
