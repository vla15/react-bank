import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits: [],
      credits: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/debits")
      .then(test => test.json())
      .then(result => this.setState({debits: result}))
    fetch("http://localhost:4000/credits")
      .then(data => data.json())
      .then(credits => this.setState({credits: credits}))
  }

  addNewCreditOrDebit = (debt, type) => {
    let updated = [...this.state[type], debt]
    this.setState({[type]: updated})
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }


  render() {
    const creditTotal = this.state.credits.reduce((total, credit) => total + parseFloat(credit.amount), 0)
    const debitTotal = this.state.debits.reduce((total, debit) => total - parseFloat(debit.amount), 0)
    const accountBalance = parseFloat(this.state.accountBalance + creditTotal + debitTotal);
    const HomeComponent = () => (<Home accountBalance={accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );

    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
    const DebitsComponent = () => (<Debits addDebit={this.addNewCreditOrDebit} debits={this.state.debits} accountBalance={accountBalance}/>)
    const CreditsComponent = () => (<Credits addCredit={this.addNewCreditOrDebit} credits={this.state.credits} accountBalance={accountBalance}/>)

    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
        </div>
      </Router>
    );
  }

}

export default App;