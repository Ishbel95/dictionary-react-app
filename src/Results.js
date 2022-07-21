import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <div className="container">
          <div className="color-box-grid">
            <div className="red-box">
              <div className="yellow-box">
                <h1>{props.result.word}</h1>
                {props.result.phonetics.map(function(phonetic, index) {
                  return (
                    <div key={index}>
                      <Phonetics phonetics={phonetic} />
                    </div>
                  );
                })}

                {props.result.meanings[0].synonyms.map(function(
                  synonym,
                  index
                ) {
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
              <div className="blue-box">Pictures</div>
            </div>
            <div className="yellow-box">
              <div className="red-box">Pictures</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
//.meanings[0].definitions[0].definition
