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

const formatedNumber = num =>
  parseFloat(Math.round(num * 100) / 100).toFixed(2);

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  handleDeposit = amount => {
    if (amount <= 0 || amount === '') {
      toast.info(notifyMsg.zeroAmount);
      return;
    }

    this.setState(({ transactions, balance }) => {
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
    if (this.state.balance < amount) {
      toast.warning(notifyMsg.notEnaughMoney);
      return;
    }

    if (amount <= 0 || amount === '') {
      toast.info(notifyMsg.zeroAmount);
      return;
    }

    this.setState(({ transactions, balance }) => {
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

  countTotalSumByTransTypes() {
    const { transactions } = this.state;

    return transactions.reduce(
      (total, transaction) => {
        return {
          ...total,
          [transaction.type]: total[transaction.type] + transaction.amount,
        };
      },
      {
        deposit: 0,
        withdrawal: 0,
      },
    );
  }

  render() {
    const { transactions, balance } = this.state;
    const { deposit, withdrawal } = this.countTotalSumByTransTypes();

    const formatedTransactions = transactions.map(transaction => {
      return {
        ...transaction,
        amount: formatedNumber(transaction.amount),
      };
    });

    return (
      <Container>
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
        />
        <Balance
          balance={formatedNumber(balance)}
          income={formatedNumber(deposit)}
          expenses={formatedNumber(withdrawal)}
        />
        <TransactionHistory items={formatedTransactions} />
        <ToastContainer />
      </Container>
    );
  }
}
