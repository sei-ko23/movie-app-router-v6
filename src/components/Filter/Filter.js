import React from "react";
import "./filter.css";
import ReactStars from "react-rating-stars-component";


const Filter = ({setTextFilter,setStarsRate}) => {
  return (
    <div className="body">
      <form action="" className="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required onChange={(e)=>setTextFilter(e.target.value)} />
        <button className="search-btn" type="submit">
        </button>
      </form>
      <ReactStars size="50" 
      
      
      onChange={(e)=>setStarsRate(e)}
      />
    </div>
  );
};

export default Filter;
