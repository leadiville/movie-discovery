// title - [data-testid: movie-title]
//  release date (in UTC) - [data-testid: movie-release-date]
//  runtime (in minutes) - [data-testid: movie-runtime]
//  overview - [data-testid: movie-overview]

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EachMovie = ({ options }) => {
  const params = useParams();
  const [eachMovie, setEachMovie] = useState({});

  const fetchSingleMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    )
      .then((response) => response.json())
      .then((data) => data.results.splice(1, 10))
      // .then(movies => console.log(movies))
      .then((data) =>
        data.find((movie, movieId) => {
          return movieId == params.movieId
            ? movie
            : console.log("not selected");
        })
      )
      .then((movie) => setEachMovie(movie))
      .catch((err) => console.error(err));
  };

  useEffect(fetchSingleMovies, []);

  return (
    <>
      <Link to="/movies">
        <p className="content-is-small ml-3 mt-4 has-text-link">
          <strong>Go Back</strong>
        </p>
      </Link>
      
        <div className="container has-text-centered mt-6">
          <p className="title">{eachMovie.title}</p>
          <figure className="mb-4">
            <img
              style={{ height: 700, width: "auto" }}
              src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`}
              alt={`${eachMovie.title} image`}
            />
          </figure>
          <article className="article">
            <p className="content">{eachMovie.overview}</p>
            <p className="content is-small">
              `This movie was created on: {eachMovie.release_date}`
            </p>
          </article>
          <p className="content"></p>
        </div>
    </>
  );
};

export default EachMovie;
