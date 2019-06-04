import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

export default class Controls extends Component {
  state = {
    input: '',
  };

  onChange = e => {
    this.setState({
      input: Number(e.target.value),
    });
  };

  onDepositBtnClick = () => {
    if (this.state.input === 0 || this.state.input === '') {
      alert('Введите сумму для проведения операции!');
      this.setState({ input: '' });
      return;
    }

    this.props.handleDepositBtnClick(this.state.input);
    this.setState({ input: '' });
  };

  onWithdrawBtnClick = () => {
    if (this.state.input === 0) {
      alert('Введите сумму для проведения операции!');
      this.setState({ input: '' });
      return;
    }
    this.props.handleWithdrawBtnClick(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <section className={styles.controls}>
        <input
          className={styles.input}
          type="number"
          value={input}
          onChange={this.onChange}
        />
        <button
          className={styles.btn}
          type="button"
          onClick={this.onDepositBtnClick}
        >
          Deposit
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={this.onWithdrawBtnClick}
        >
          Withdraw
        </button>
      </section>
    );
  }
}
