import React, { Component } from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px;
  background-color: #002757;
`;

const Button = styled.button`
  display: inline-block;
  min-width: 144px;
  border: 0;
  padding: 4px 16px;
  margin-left: 16px;
  background-color: #3884ff;
  border-radius: 3px;
  transition: all 200ms ease;
  font-family: inherit;
  font-size: 14px;
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

const Input = styled.input`
  min-width: 200px;
  border-radius: 3px;
  border: none;
  text-indent: 0.4rem;
`;

export default class Controls extends Component {
  static propTypes = {
    onDeposit: T.func.isRequired,
    onWithdraw: T.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleInput = e => {
    const amount = Number(e.target.value);
    this.setState({ inputValue: amount });
  };

  handleDeposit = () => {
    this.props.onDeposit(this.state.inputValue);
    this.reset();
  };

  handleWithdraw = () => {
    this.props.onWithdraw(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <Section>
        <Input
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
