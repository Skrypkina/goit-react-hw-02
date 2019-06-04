import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Controls = ({ handleDecrement, handleIncrement, idx }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={idx > 1 ? styles.button : styles.disabled}
      onClick={handleDecrement}
    >
      Назад
    </button>

    <button
      type="button"
      className={idx < 12 ? styles.button : styles.disabled}
      onClick={handleIncrement}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,

  idx: PropTypes.number.isRequired,
};

export default Controls;
