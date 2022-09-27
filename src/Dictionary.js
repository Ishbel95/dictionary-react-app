import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import "./Homepage.css";
import { Container } from "react-nes-component";

export default function Dictionary() {
  // state management
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  // form
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
  // homepage
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
  // set photos to repsonse from api
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  // set results from dictionary to response of api
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  // set keyword used in api call to value of form input
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  // on search make api call and recieve response using state.
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = `563492ad6f917000010000017a8eb31d7ce74d6793a287cd202d9d50`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=32`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }
  // if we get a response, render the results, sending result and photos props to results to component.
  // else render original homepage
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
