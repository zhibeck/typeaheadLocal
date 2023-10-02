import React, { useState } from "react";

const Typeahead = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filter = new RegExp(`^${value}`, "i");
      const filtered = suggestions.filter((suggestion) =>
        filter.test(suggestion)
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange}></input>
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Typeahead;
