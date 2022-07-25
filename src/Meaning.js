import React from "react";

import { Container } from "react-nes-component";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <Container isDark>
        <h3 className="subtitles text-capitalize">
          {props.meaning.partOfSpeech}
        </h3>
      </Container>
      <Container isDark>
        <p className="content stretch pt-3">
          {props.meaning.definitions[0].definition}
        </p>
        <em>
          <p className="content stretch pt-3">
            {props.meaning.definitions[0].example}
          </p>
        </em>
      </Container>
    </div>
  );
}
