import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const Table = styled.table`
  margin: 0 auto;
  box-shadow: 0px 1px 4px 0px rgba(184, 184, 184, 1);
  border-width: 1px;
  border-collapse: collapse;
  border-radius: 2px;
  overflow: hidden;
`;

const TableHead = styled.th`
  padding: 14px 50px;
  width: 33.3%;
  background-color: #eef0f5;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
  border-right: 1px solid #fff;
  :last-child {
    border-right: none;
  }
`;

const Column = styled.td`
  width: 33.3%;
  padding: 10px 50px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #eef0f5;
  color: #85888a;
`;

const TypeColumn = styled(Column)`
  padding-left: 70px;
  text-transform: capitalize;
  text-align: left;
`;

const formatedNumber = num =>
  parseFloat(Math.round(num * 100) / 100).toFixed(2);

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Transaction</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <TypeColumn>{transaction.type}</TypeColumn>
            <Column>{formatedNumber(transaction.amount)}$</Column>
            <Column>{transaction.date}</Column>
          </tr>
        ))}
      </tbody>
    </Table>
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
