import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Counter = ({ idx, number }) => (
  <Fragment>
    <p className={styles.counter}>
      {idx}/{number}
    </p>
  </Fragment>
);

Counter.propTypes = {
  idx: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};

export default Counter;
