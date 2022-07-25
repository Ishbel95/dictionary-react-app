import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";
import OpenSourceLink from "./OpenSourceLink";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <footer>
        <OpenSourceLink />
      </footer>
    </div>
  );
}
