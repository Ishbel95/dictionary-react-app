import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import "./Homepage.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  let form = (
    <form onSubmit={search} className="form">
      <input
        type="search"
        autoFocus={true}
        onChange={updateKeyword}
        placeholder="Enter text here"
      />
    </form>
  );
  let homepage = (
    <div className="Homepage">
      <form onSubmit={search} className="homepage-form">
        <input
          type="search"
          autoFocus={true}
          onChange={updateKeyword}
          placeholder="Enter text here"
        />
      </form>
      <div className="homepage-grid">
        <div className="red-box"></div>
        <div className="blue-box"></div>
        <div className="green-box"></div>
        <div className="yellow-box"></div>
      </div>
    </div>
  );
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (results) {
    return (
      <div className="Dictionary">
        {form}
        <Results result={results} />
      </div>
    );
  } else {
    return <div>{homepage}</div>;
  }
}
