import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

class App extends Component {
  state = {
    accounts: [
      {
        id: 1,
        name: "Vladan",
        lastName: "Cupric",
        phone: "11-11-11",
        email: "vladancupric@gmail.com",
      },
      {
        id: 2,
        name: "Ranko",
        lastName: "Stajic",
        phone: "22-11-11",
        email: "rankostajic@gmail.com",
      },
      {
        id: 3,
        name: "Branko",
        lastName: "Riznic",
        phone: "33-11-11",
        email: "brankoriznic@gmail.com",
      },
    ],
  };
  addNewAccountToState = (acc) => {
    this.setState({
      accounts: [...this.state.accounts, acc],
    });
  };

  deleteAccount = (id) => {
    const accountsCopy = [...this.state.accounts];
    const newCopyAccounts = accountsCopy.filter((account) => account.id !== id);
    this.setState({ accounts: newCopyAccounts });
  };

  editAccount= (acc)=>{
    const copyAccounts = [...this.state.accounts]
  let accountPosition =copyAccounts.map(account => account.id).indexOf(acc.id);
  copyAccounts[accountPosition] = acc;
  this.setState({accounts:copyAccounts});
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <AccountsTable accounts={this.state.accounts} />
        </Route>
        <Route path="/add">
          <AddAccount addNewAccountToState={this.addNewAccountToState} />
        </Route>
        <Switch>
          <Route path="/edit/:id">
            <EditAccount editAccount={this.editAccount} accounts={this.state.accounts}/>
          </Route>
          <Route path="/edit">
            <EditTable
              accounts={this.state.accounts}
              deleteAccount={this.deleteAccount}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
