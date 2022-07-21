import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return <span className="content text-capitalize">{props.synonyms}</span>;
  } else {
    return null;
  }
}
