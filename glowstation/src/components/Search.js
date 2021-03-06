import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../css/Search.css";

const Search = (props) => {
 const [keyword, setKeyword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    props.SearchBar(keyword);
  };

  return (
    <div className="searchArea">
      <div className="wholeSearch">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="searchKeyword">
            <Form.Control
              type="keyword"
              value={keyword}
              name="text"
              placeholder="Search Glow Station"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Form.Group>
          <button className="searchB" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="searchIcon"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Search;
