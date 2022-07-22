import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="content text-capitalize m-2 fst-italic">
        {props.synonyms}
      </span>
    );
  } else {
    return null;
  }
}
