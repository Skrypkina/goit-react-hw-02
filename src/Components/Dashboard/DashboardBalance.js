import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

const Balance = ({ balance, deposit, withdraw }) => (
  <section className={styles.balance}>
    <span className={styles.emoji} role="img" aria-label="errow">
      ⬆️{deposit}$
    </span>
    <span className={styles.emoji} role="img" aria-label="errow">
      ⬇️{withdraw}$
    </span>
    <span className={styles.span}>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  withdraw: PropTypes.number.isRequired,
};
export default Balance;
