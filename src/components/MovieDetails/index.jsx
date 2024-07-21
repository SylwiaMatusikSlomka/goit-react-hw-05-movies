import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import style from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const fetchDataDetails = async movieId => {
    const response = await api.featchMovie(movieId);
    setMovie(response);
  };

  useEffect(() => {
    fetchDataDetails(movieId);
  }, [movieId]);

  const { title, vote_average, poster_path, overview, genres } = movie;

  const genresHange = () => {
    if (Array.isArray(genres)) {
      return genres.map(movie => movie.name).join(' ');
    } else {
      return 'No genres available';
    }
  };

  return (
    <div className={style.wrapper}>
      <Link to={backLink}><button className={style.btn}> Go back</button></Link>
      <div className={style.detailsWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
          alt="Movie"
        />
        <div className={style.movieDetails}>
          <h2>{title}</h2>
          User Score: {vote_average}%<h5>Overview</h5> {overview}
          <h4>Genres</h4>
          <div className={style.genres}>{genresHange(genres)}</div>
        </div>
      </div>
      <h4 className={style.paragraph}>Additional information</h4>
      <ul className={style.listMovie}>
        <li>
          <Link className={style.movieDetails} to="credits">
            Credits
          </Link>
        </li>
        <li>
          <Link className={style.movieDetails} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
