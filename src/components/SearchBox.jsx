import { useEffect, useState } from "react";

const SearchBox = ({ searchInput, setSearchInput, options, setSearchResult }) => {

  const searchMovies = (title) => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated`, options)
      .then((response) => response.json())
      .then(response => response.results)
      .then(json => json.filter(movie => {
         let search = title && movie && movie.title && movie.title.toLowerCase().includes(title)
        // console.log(search)
        setSearchResult(search);
      }))
  }

  useEffect(() => searchMovies(searchInput), [searchInput]);

  return (
      <div className="field mb-6">
        <div className="control">
          <input
            className="input is-rounded is-is-full-mobile "
            placeholder="enter search"
            type="searchbox"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
    </div>
  );
};
export default SearchBox;
