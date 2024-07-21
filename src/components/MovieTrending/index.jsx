import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './MovieTrending.module.css';

export const MovieTrending = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const featchData = async () => {
    const response = await api.featchMovieTrending();
    setMovies(response.results);
  };

  useEffect(() => {
    featchData();
  }, []);

  // console.log(movies);
  return (
    <ul className={style.movieList}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={style.movieListItem}>
            <Link className={style.movieLink} to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieTrending;
