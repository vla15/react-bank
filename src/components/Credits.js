import React from 'react';
import Credit from './Credit';

export default class Credits extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: {
        id: '',
        description: '',
        date: '',
        amount: ''
      }
    }
  }

  handleOnChange = (e) => {
    const id = this.props.credits.length;
    const updateInput = { ...this.state.input }
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updateInput[inputField] = inputValue;
    updateInput["id"] = id;
    updateInput["date"] = JSON.stringify(new Date());
    this.setState({ input: updateInput });
  }

  render() {
    const userInput = { ...this.state.input };
    const credits = this.props.credits.map((credit, i) => <Credit key={i} {...credit}/>)
    return (
      <div>
        <h1>Credits</h1>
        <h2>Account Balance: {this.props.accountBalance}</h2>
        {credits}
        <input type="text" name="description" onChange={this.handleOnChange} value={this.state.description}></input>
        <input type="text" name="amount" onChange={this.handleOnChange} value={this.state.amount}></input>
        <button onClick={() => { this.props.addCredit(userInput, "credits") }}>Add Credit</button>
      </div>
    );
  }
}