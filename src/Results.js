import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <div className="color-box-grid">
          <div className="red-box">
            <div className="yellow-box">
              <h1 className="subtitles text-capitalize">{props.result.word}</h1>
              {props.result.phonetics.map(function(phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetics={phonetic} />
                  </div>
                );
              })}

              {props.result.meanings[0].synonyms.map(function(synonym, index) {
                return (
                  <div key={index}>
                    <Synonyms synonyms={synonym} />
                  </div>
                );
              })}
            </div>
          </div>
          {props.result.meanings.map(function(meaning, index) {
            return (
              <div className="blue-box" key={index}>
                <div className="green-box">
                  <Meaning meaning={meaning} />
                </div>
              </div>
            );
          })}
          <div className="green-box">
            <div className="blue-box">
              <Photos photos={props.photos} />
            </div>
          </div>
          <div className="yellow-box">
            <div className="red-box">
              <Photos photos={props.photos} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
