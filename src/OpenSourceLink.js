import React from "react";
import "./OpenSourceLink.css";
import { Container } from "react-nes-component";

export default function OpenSourceLink() {
  return (
    <div className="OpenSourceLink">
      <Container isDark isRounded>
        <span>
          <a
            href="https://github.com/Ishbel95/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
            title="Github link"
          >
            <span className="red-letter">O</span>
            <span className="blue-letter">p</span>
            <span className="green-letter">e</span>
            <span className="yellow-letter">n</span>
            <span className="red-letter">-</span>
            <span className="blue-letter">s</span>
            <span className="green-letter">o</span>
            <span className="yellow-letter">u</span>
            <span className="red-letter">r</span>
            <span className="blue-letter">c</span>
            <span className="green-letter">e</span>
            <span className="yellow-letter">-</span>
            <span className="red-letter">c</span>
            <span className="blue-letter">o</span>
            <span className="green-letter">d</span>
            <span className="yellow-letter">e</span>
          </a>
          {""} by Ishbel Fahey-Theaker
        </span>
      </Container>
    </div>
  );
}
