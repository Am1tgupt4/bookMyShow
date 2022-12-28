import React, { useState, useEffect } from "react";
import "./App.scss";
import Headers from "./components/Headers/Headers";
import ListItems from "./components/ListItems/ListItems";
import ApiUrls from "./services/apiUrls";
import BaseURL from "./services/axios";

const getUrl = ApiUrls.moviesTrailer;

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [languages, setLanguageList] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await BaseURL.get(getUrl);
      setAllMovies(Object.values(request.data.moviesData));
      setMovies(Object.values(request.data.moviesData));
      let lang = request.data.languageList.map((d) => {
        return {
          label: d,
          value: d,
        };
      });
      setLanguageList(lang);
      return request;
    }
    fetchData();
  }, []);

  const moviesFilter = (value) => {
    const filterLang = allMovies.filter((movie) =>
      value.includes(movie.EventLanguage)
    );
    setMovies(filterLang);
  };

  const languagesFilter = (value) => {
    setSelectedLanguages(value);
    if (value.length) {
      moviesFilter(value);
    } else {
      setMovies(allMovies);
    }
  };

  const onRemoveFilter = (filterValue) => {
    const filterSelLang = selectedLanguages.filter(
      (value) => value !== filterValue
    );
    setSelectedLanguages(filterSelLang);
    if (filterSelLang.length) {
      moviesFilter(filterSelLang);
    } else {
      setMovies(allMovies);
    }
  };

  console.log("filterMovies---->", movies);

  return (
    <div className="app">
      <Headers
        languages={languages}
        languagesFilter={languagesFilter}
        onRemoveFilter={onRemoveFilter}
        selectedLanguages={selectedLanguages}
      />
      <div className="app-items">
        {movies.length ? (
          <ListItems movies={movies} />
        ) : (
          <div className="not-found-movies">Movies Not Found</div>
        )}
      </div>
    </div>
  );
}

export default App;
