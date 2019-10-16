import React from 'react';
// import styled from 'styled-components';
import T from 'prop-types';

// const Count = styled.p`
//   text-align: center;
//   font-weight: 400;
//   font-size: 24px;
//   margin-bottom: 16px;
// `;

const Balance = ({ balance, income, expenses }) => {
  return (
    <section>
      <span>
        <span role="img" aria-label="upward arrow">
          ⬆️
        </span>
        {income}$
      </span>
      <span>
        <span role="img" aria-label="downward arrow">
          ⬇️
        </span>
        {expenses}$
      </span>
      <span>Balance: {balance}$</span>
    </section>
  );
};

// Balance.defaultProps = {
//   balance: 0,
//   income: 0,
//   expenses: 0,
// };

Balance.propTypes = {
  balance: T.number.isRequired,
  income: T.number.isRequired,
  expenses: T.number.isRequired,
};

export default Balance;
