import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';

const SearchBar = ({ value, onChange }) => (
  <Fragment>
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  </Fragment>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
