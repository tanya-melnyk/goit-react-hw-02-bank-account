import React, { Component } from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const Button = styled.button`
  display: inline-block;
  min-width: 240px;
  border: 0;
  padding: 8px 16px;
  margin-left: 4px;
  margin-right: 4px;
  background-color: #3884ff;
  border-radius: 3px;
  transition: all 200ms ease;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #1f65d6;
  }
`;

export default class Controls extends Component {
  static propTypes = {
    onDeposit: T.func.isRequired,
    onWithdraw: T.func.isRequired,
  };

  state = {
    inputValue: 0,
  };

  handleInput = e => {
    const amount = Number(e.target.value);
    this.setState({ inputValue: amount });
  };

  handleDeposit = () => {
    this.props.onDeposit(this.state.inputValue);
  };

  handleWithdraw = () => {
    this.props.onWithdraw(this.state.inputValue);
  };

  render() {
    const { inputValue } = this.state;
    // const { onDeposit, onWithdraw } = this.props;

    return (
      <Section>
        <input
          type="number"
          name="amount"
          value={inputValue}
          onChange={this.handleInput}
        />
        <Button type="button" onClick={this.handleDeposit}>
          Deposit
        </Button>
        <Button type="button" onClick={this.handleWithdraw}>
          Withdraw
        </Button>
      </Section>
    );
  }
}
