import React from 'react';
import { createContext, useState } from 'react';
import { node } from 'prop-types';

export const MoviesContext = createContext({
  movies: null,
  movieDetail: null,
});

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [movieDetail, setMovieDetail] = useState();

  const value = {
    movies,
    setMovies,
    movieDetail,
    setMovieDetail,
  };

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
};

MoviesProvider.propTypes = {
  children: node.isRequired,
};

export default MoviesProvider;
