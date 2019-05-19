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
    input: '',
    deposit: 0,
    withdraw: 0,
  };

  static propTypes = {
    history: PropTypes.array,
    balance: PropTypes.number,
    input: PropTypes.string,
    deposit: PropTypes.number,
    withdraw: PropTypes.number,
  };

  onChange = e => {
    this.setState({
      input: Number(e.target.value),
    });
  };

  handleDepositBtnClick = () => {
    if (this.state.input === 0 || this.state.input === '') {
      alert('Введите сумму для проведения операции!');
      this.setState({ input: '' });
      return;
    }
    const addTransaction = {
      id: shortid.generate(),
      date: date.toLocaleString(),
      amount: this.state.input,
      type: 'Deposit',
    };
    this.setState(state => ({
      deposit: state.deposit + state.input,
      balance: state.balance + state.input,
      history: [...state.history, addTransaction],
    }));
    this.setState({ input: '' });
  };

  handleWithdrawBtnClick = () => {
    if (this.state.balance < this.state.input || this.state.input === '') {
      alert('На счету недостаточно средств для проведения операции!');
      this.setState({ input: '' });
      return;
    }
    if (this.state.input === 0) {
      alert('Введите сумму для проведения операции!');
      this.setState({ input: '' });
      return;
    }
    const addTransaction = {
      id: shortid.generate(),
      date: date.toLocaleString(),
      amount: this.state.input,
      type: 'Withdrawal',
    };
    this.setState(state => ({
      withdraw: state.withdraw + state.input,
      balance: state.balance - state.input,
      history: [...state.history, addTransaction],
    }));
    this.setState({ input: '' });
  };

  render() {
    const { balance, deposit, withdraw, input, history } = this.state;

    return (
      <div className="dashboard">
        <Controls
          onChange={this.onChange}
          handleDepositBtnClick={this.handleDepositBtnClick}
          handleWithdrawBtnClick={this.handleWithdrawBtnClick}
          input={String(input)}
          deposit={deposit}
        />
        <Balance balance={balance} deposit={deposit} withdraw={withdraw} />

        <TransactionHistory history={history} />
      </div>
    );
  }
}
