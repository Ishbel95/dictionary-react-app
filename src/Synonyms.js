import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return <span>{props.synonyms}</span>;
  } else {
    return null;
  }
}
