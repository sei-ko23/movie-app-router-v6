import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { data } from "../../data";
import { Container } from "react-bootstrap";
function MovieTrailer() {
  const [movie, setmovie] = useState({});
  const navigate = useNavigate();

  const param = useParams();
  console.log(param);

  const findmovie = () => {
    setmovie(data.find((el) => +param.movieid === +el.id));
  };
  useEffect(() => {
    findmovie();
  }, []);
  console.log(movie);
  return (
    <Container>
      <div style={{ textAlign: "center", paddingBottom: "50px" }}>
        <iframe
          width="853"
          height="480"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3 style={{ color: "white", textAlign: "justify" }}>{movie.desc}</h3>
        <button className="button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </Container>
  );
}

export default MovieTrailer;
