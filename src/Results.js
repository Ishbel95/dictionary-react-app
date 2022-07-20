import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{props.result.word}</h1>
              <p>Listen</p>
              <p>Synonum</p>
            </div>
            {props.result.meanings.map(function(meaning, index) {
              return (
                <div className="col-md-12" key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
            <div className="col-md-12">Pictures</div>
            <div className="col-md-12">Pictures</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
//.meanings[0].definitions[0].definition
