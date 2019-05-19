import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';

const MovieGridItem = ({ title, posterUrl, overview }) => (
  <div className={styles.movieCard}>
    <img src={posterUrl} className={styles.movieCardImg} alt={title} />
    <div className={styles.movieCardContent}>
      <h2 className={styles.movieCardTitle}>{title}</h2>
      <p className={styles.movieCardPar}>{overview}</p>
    </div>
  </div>
);

MovieGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieGridItem;
