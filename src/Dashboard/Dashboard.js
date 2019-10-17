import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';

import Balance from '../Balance';
import Controls from '../Controls';
import TransactionHistory from '../TransactionHistory';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const notifyMsg = {
  zeroAmount: '⬅️ Enter some amount to create a transaction!',
  notEnaughMoney:
    '❗️ There are not enough funds on the account to make a withdrawal!',
};

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  handleDeposit = amount => {
    this.setState(({ transactions, balance }) => {
      if (amount === 0 || amount === '') {
        toast.info(notifyMsg.zeroAmount);
        return { transactions, balance };
      }

      const newTransaction = {
        id: uuidv1(),
        type: 'deposit',
        amount,
        date: new Date().toLocaleString(),
      };

      return {
        transactions: [...transactions, newTransaction],
        balance: balance + amount,
      };
    });
  };

  handleWithdraw = amount => {
    this.setState(({ transactions, balance }) => {
      if (balance < amount) {
        toast.warning(notifyMsg.notEnaughMoney);
        return { transactions, balance };
      }

      if (amount === 0 || amount === '') {
        toast.info(notifyMsg.zeroAmount);
        return { transactions, balance };
      }

      const newTransaction = {
        id: uuidv1(),
        type: 'withdrawal',
        amount,
        date: new Date().toLocaleString(),
      };

      return {
        transactions: [...transactions, newTransaction],
        balance: balance - amount,
      };
    });
  };

  countTotalSumOf(transactionType) {
    const { transactions } = this.state;

    return transactions
      .filter(transaction => transaction.type === transactionType)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  render() {
    const { transactions, balance } = this.state;
    const totalIncome = this.countTotalSumOf('deposit');
    const totalExpenses = this.countTotalSumOf('withdrawal');

    return (
      <Container>
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
        />
        <Balance
          balance={balance}
          income={totalIncome}
          expenses={totalExpenses}
        />
        <TransactionHistory items={transactions} />
        <ToastContainer />
      </Container>
    );
  }
}
