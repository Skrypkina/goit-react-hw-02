import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Controls from './DashboardControls';
import Balance from './DashboardBalance';
import TransactionHistory from './DashboardTransactionHistory';

const date = new Date();

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    deposit: 0,
    withdraw: 0,
  };

  static propTypes = {
    history: PropTypes.array,
    balance: PropTypes.number,
    deposit: PropTypes.number,
    withdraw: PropTypes.number,
  };

  handleDepositBtnClick = input => {
    const addTransaction = {
      id: shortid.generate(),
      date: date.toLocaleString(),
      amount: input,
      type: 'Deposit',
    };
    this.setState(state => ({
      deposit: state.deposit + input,
      balance: state.balance + input,
      history: [...state.history, addTransaction],
    }));
  };

  handleWithdrawBtnClick = input => {
    if (this.state.balance < input || input === '') {
      alert('На счету недостаточно средств для проведения операции!');
      return;
    }

    const addTransaction = {
      id: shortid.generate(),
      date: date.toLocaleString(),
      amount: input,
      type: 'Withdrawal',
    };
    this.setState(state => ({
      withdraw: state.withdraw + input,
      balance: state.balance - input,
      history: [...state.history, addTransaction],
    }));
  };

  render() {
    const { balance, deposit, withdraw, history } = this.state;

    return (
      <div className="dashboard">
        <Controls
          handleDepositBtnClick={this.handleDepositBtnClick}
          handleWithdrawBtnClick={this.handleWithdrawBtnClick}
          deposit={deposit}
          balance={balance}
        />
        <Balance balance={balance} deposit={deposit} withdraw={withdraw} />

        <TransactionHistory history={history} />
      </div>
    );
  }
}
