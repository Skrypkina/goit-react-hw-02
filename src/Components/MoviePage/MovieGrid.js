import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from './MovieGridItem';
import styles from './MoviePage.module.css';

const MovieGrid = ({ movies }) => (
  <ul className={styles.movieGrid}>
    {movies.map(movie => (
      <li key={movie.id}>
        <MovieGridItem {...movie} />
      </li>
    ))}
    {movies.length === 0 && (
      <p className={styles.paragraph}>No matching results!</p>
    )}
  </ul>
);

MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieGrid;
