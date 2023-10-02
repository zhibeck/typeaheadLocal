import "./styles.css";
import React, { useState } from "react";
import Typeahead from "./Typeahead";

const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Dates",
  "Fig",
  "Grape",
  "Mange",
  "Orange",
  "Strawberry"
];

export default function App() {
  return (
    <div className="App">
      <h1>Typeahead</h1>
      <h3>Implementation with local data.</h3>
      <p>Type fruit name to start!</p>
      <Typeahead suggestions={suggestions} />
    </div>
  );
}
