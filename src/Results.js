import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Synonyms from "./Synonyms";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <div className="container">
          <div className="row">
            <div className="col-md-6 red-box">
              <h1>{props.result.word}</h1>
              <div>Listen</div>
              {props.result.meanings[0].synonyms.map(function(synonym, index) {
                return (
                  <div key={index}>
                    <Synonyms synonyms={synonym} />
                  </div>
                );
              })}
            </div>
            {props.result.meanings.map(function(meaning, index) {
              return (
                <div className="col-md-6 blue-box" key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
            <div className="col-md-6 green-box">Pictures</div>
            <div className="col-md-6 yellow-box">Pictures</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
//.meanings[0].definitions[0].definition
