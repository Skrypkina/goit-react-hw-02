import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

const Controls = ({
  onChange,
  handleDepositBtnClick,
  handleWithdrawBtnClick,
  input,
}) => (
  <section className={styles.controls}>
    <input
      className={styles.input}
      type="number"
      onChange={onChange}
      value={input}
    />
    <button
      className={styles.btn}
      type="button"
      onClick={handleDepositBtnClick}
    >
      Deposit
    </button>
    <button
      type="button"
      className={styles.btn}
      onClick={handleWithdrawBtnClick}
      value={input}
    >
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleDepositBtnClick: PropTypes.func.isRequired,
  handleWithdrawBtnClick: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
export default Controls;
