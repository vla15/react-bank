import React from 'react';
import Debt from './Debt';

export default class Debits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        id: '',
        description: '',
        amount: '',
        date: '',
      }
    }
  }

  handleOnChange = (e) => {
    const id = this.props.debits.length;
    const updateInput = {...this.state.input}
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updateInput[inputField] = inputValue;
    updateInput["id"] = id;
    updateInput["date"] = JSON.stringify(new Date());
    this.setState({input: updateInput});
  }

  render() {
    const userInput = {...this.state.input};
    const debits = this.props.debits.map((debt, i) => <Debt key={i} {...debt}/>);
    return (
      <div>
        <h1>Debts</h1>
        <h2>Your account balance: {this.props.accountBalance}</h2>
        {debits}
        <input type="text" name="description" onChange={this.handleOnChange} value={this.state.description}></input>
        <input type="text" name="amount" onChange={this.handleOnChange} value={this.state.amount}></input>
        <button onClick={() => {this.props.addDebit(userInput, "debits")}}>Add Debit</button>
      </div>
    );
  }
}