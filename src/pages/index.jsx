import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBox from "../components/SearchBox";

const HomePage = ({ options }) => {
  const [myData, setMyData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated`, options)
      .then((response) => response.json())
      //get just ten of the trending movies
      .then((data) => data.results.splice(1, 10))
      .then((movies) => {
        searchInput ? setMyData(searchResult) : setMyData(movies);
      })
      .then((movies) => console.log(movies))
      .catch((err) => console.error(err));
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container mt-2">
      <SearchBox
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchResult={setSearchResult}
        options={options}
      />
      <p className="title">Favorite Movies</p>

      <div className="columns is-multiline">
        {myData.map((d, id) => (
          <div className="column is-4" key={id}>
            <MovieCard
              imageUrl={`https://image.tmdb.org/t/p/w500/${d.poster_path}`}
              title={d.title}
              releaseDate={d.release_date}
              id={id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
