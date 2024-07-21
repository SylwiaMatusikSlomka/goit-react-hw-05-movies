import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFound.module.css';
export const NotFound = () => {
  return (
    <div className={style.error}>
      <h1 className={style.header}>NotFound</h1>
      <p className={style.paragraph}>
        There is nothing hear please go to Homepage
      </p>
      <button className={style.btnNotfound}>
        <Link className={style.link} to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};
export default NotFound;
