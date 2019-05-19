import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Controls = ({ handleDecrement, handleIncrement, idx }) => (
  <section className={styles.controls}>
    {idx > 1 ? (
      <button type="button" className={styles.button} onClick={handleDecrement}>
        Назад
      </button>
    ) : (
      <button type="button" className={styles.disabled}>
        Вперед
      </button>
    )}
    {idx < 12 ? (
      <button type="button" className={styles.button} onClick={handleIncrement}>
        Вперед
      </button>
    ) : (
      <button type="button" className={styles.disabled}>
        Вперед
      </button>
    )}
  </section>
);

Controls.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,

  idx: PropTypes.number.isRequired,
};

export default Controls;
