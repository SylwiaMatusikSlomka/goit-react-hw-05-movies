/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieCredits.module.css';

export const MovieCredits = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const fetchMovieCredits = async () => {
    const response = await api.featchMovieCredits(movieId);
    setMovie(response.cast);
  };
  useEffect(() => {
    fetchMovieCredits(movieId);
  }, [movieId]);

  return (
    <ul className={styles.movieList}>
      {movie.map(person => (
        <li key={person.id} className={styles.listItemPerosn}>
          <img
            className={styles.imgPerson}
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
          />
          <span className={styles.person}>Name:{person.name}</span>
          <span className={styles.person}>Character:{person.character}</span>
        </li>
      ))}
    </ul>
  );
};
export default MovieCredits;
