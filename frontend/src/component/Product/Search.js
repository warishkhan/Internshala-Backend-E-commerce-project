import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";
import { Link, useNavigate } from "react-router-dom";

const Search = ({setSearch}) => {
  const [keyword, setKeyword] = useState("");
 const navigate = useNavigate()

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setSearch('block')
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <Link to="/" className="homeBtn" onClick={()=>setSearch('block')}>Home</Link>
    </Fragment>
  );
};

export default Search;
