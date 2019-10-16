import React from 'react';
// import styled from 'styled-components';
import T from 'prop-types';

// const Article = styled.article`
//   padding: 24px;
//   border: 1px none #e6ecf1;
//   border-radius: 2px;
//   background-color: #fff;
//   box-shadow: 0 6px 28px 0 rgba(24, 52, 117, 0.2);
// `;

// const Title = styled.h2`
//   font-weight: 500;
//   margin-top: 0;
//   margin-bottom: 0;
// `;

// const Text = styled.p`
//   font-weight: 300;
//   line-height: 1.5;
//   margin-bottom: 0;
// `;

const TransactionHistory = ({ items }) => {
  return (
    <table className="history">
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}$</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.number.isRequired,
      date: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
