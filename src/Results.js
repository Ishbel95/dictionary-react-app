import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import SecondaryPhotos from "./SecondaryPhotos";
import { FontFace, Button, Container } from "react-nes-component";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <div className="color-box-grid">
          <div className="red-box">
            <div className="yellow-box stretch">
              {" "}
              <Container isDark>
                <h1 className="subtitles text-capitalize">
                  {props.result.word}
                </h1>
              </Container>
              <Container isDark>
                {props.result.phonetics
                  .slice(0, 2)
                  .map(function(phonetic, index) {
                    return (
                      <div key={index}>
                        <Phonetics phonetics={phonetic} />
                      </div>
                    );
                  })}
                {props.result.meanings[0].synonyms
                  .slice(0, 4)
                  .map(function(synonym, index) {
                    return (
                      <span key={index}>
                        <Synonyms synonyms={synonym} />
                      </span>
                    );
                  })}
              </Container>
            </div>
          </div>
          {props.result.meanings.map(function(meaning, index) {
            return (
              <div className="blue-box" key={index}>
                <div className="green-box stretch">
                  <Meaning meaning={meaning} />
                </div>
              </div>
            );
          })}
          <div className="green-box">
            <div className="blue-box stretch">
              <Photos photos={props.photos} />{" "}
            </div>
          </div>
          <div className="yellow-box">
            <div className="red-box stretch">
              <SecondaryPhotos photos={props.photos} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
