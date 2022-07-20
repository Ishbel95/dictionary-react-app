import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <div className="container">
          <div className="row">
            <div className="col-md-6 red-box">
              <h1>{props.result.word}</h1>
              <p>Listen</p>
              <p>Synonum</p>
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
