import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import "./Homepage.css";
import { FontFace, Button, Container } from "react-nes-component";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  let form = (
    <form onSubmit={search} className="form">
      <Container isDark isRounded>
        <input
          type="search"
          autoFocus={true}
          onChange={updateKeyword}
          placeholder="Search a word"
        />
      </Container>
    </form>
  );
  let homepage = (
    <div className="Homepage">
      <form onSubmit={search} className="homepage-form">
        <Container isDark isRounded>
          <input
            type="search"
            autoFocus={true}
            onChange={updateKeyword}
            placeholder="Search a word"
          />
        </Container>
      </form>
      <div className="homepage-grid">
        <div className="red-box"></div>
        <div className="blue-box"></div>
        <div className="green-box"></div>
        <div className="yellow-box"></div>
      </div>
    </div>
  );
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = `563492ad6f917000010000017a8eb31d7ce74d6793a287cd202d9d50`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=32`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }
  if (results) {
    return (
      <div className="Dictionary">
        {form}
        <Results result={results} photos={photos} />
      </div>
    );
  } else {
    return <div>{homepage}</div>;
  }
}
