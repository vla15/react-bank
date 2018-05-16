import React, { Component } from 'react'
import Item from './Item';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      input: {
        id: '',
        description: '',
        date: '',
        amount: ''
      }
    }
  }

  handleOnChange = (e) => {
    const id = this.props.items.length;
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
    const type = this.state.type;
    console.log('the type', type);
    const credits = this.props.items.map((item, i) => <Item key={i} id={item.id} description={item.description} amount={item.amount} date={item.date} />)
    return (
      <div>
        <h1>{this.state.type.toUpperCase()}</h1>
        <h2>Account Balance: {this.props.accountBalance}</h2>
        {credits}
        <input type="text" name="description" onChange={this.handleOnChange} value={this.state.description}></input>
        <input type="text" name="amount" onChange={this.handleOnChange} value={this.state.amount}></input>
        <button onClick={() => { this.props.addCreditOrDebit(userInput, type) }}>Add {this.state.type}</button>
      </div>
    );
  }
}
