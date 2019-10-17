import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const Section = styled.p`
  padding: 16px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #666;
`;

const Item = styled.span`
  margin-right: 20px;
`;

const Emoji = styled.span`
  margin-right: 2px;
`;

const formatedNumber = num =>
  parseFloat(Math.round(num * 100) / 100).toFixed(2);

const Balance = ({ balance, income, expenses }) => {
  return (
    <Section>
      <Item>
        <Emoji>
          <span role="img" aria-label="upward arrow">
            ⬆️
          </span>
        </Emoji>
        {formatedNumber(income)}$
      </Item>
      <Item>
        <Emoji>
          <span role="img" aria-label="downward arrow">
            ⬇️
          </span>
        </Emoji>
        {formatedNumber(expenses)}$
      </Item>
      <span>Balance: {formatedNumber(balance)}$</span>
    </Section>
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
