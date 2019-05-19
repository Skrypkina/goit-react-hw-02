import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Publication = ({ item }) => (
  <article className={styles.publication}>
    <h2>{item.title}</h2>
    <p>{item.text}</p>
  </article>
);

Publication.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Publication;
