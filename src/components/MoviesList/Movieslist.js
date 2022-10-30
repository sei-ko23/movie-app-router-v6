import React from "react";
import { Link } from "react-router-dom";
import Moviecard from "../Moviecard/Moviecard";
import "./movieslist.css";

const Movielist = ({ movies, textFilter, starsRate }) => {
  return (
    <div className="movies">
      {movies
        .filter(
          (movie) =>
            movie.rate >= starsRate &&
            movie.title.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map((movie) => (
          <Link
            to={`/MovieTrailer/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Moviecard movie={movie} key={movie.id} />{" "}
          </Link>
        ))}
    </div>
  );
};

export default Movielist;
