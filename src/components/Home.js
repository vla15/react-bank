import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';
import Debits from './Debits';

class Home extends Component {
  render() {
    return (
      <div>
        <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
        <h1>Bank of React</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
        <div><Link to="/debits">Debits</Link></div>
        <div><Link to="/credits">Credits</Link></div>
      </div>
    );
  }
}

export default Home;