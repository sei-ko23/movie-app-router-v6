import "./moviecard.css";
import ReactStars from "react-rating-stars-component";

function Moviecard({ movie }) {
  return (
    <div className="movie">
      <img className="photo-css" width="200" src={movie.photo} alt="" />
      <h5> {movie.title} </h5>

      <ReactStars edit={false} value={movie.rate} size={20} />
    </div>
  );
}

export default Moviecard;
