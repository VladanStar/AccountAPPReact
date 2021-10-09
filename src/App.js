import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Route, BrowserRouter } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";

class App extends Component {
  state = {
    accounts:[
      {id:1, name:"Vladan",lastName:"Cupric",phone:"11-11-11", email:"vladancupric@gmail.com"},
      {id:2, name:"Ranko",lastName:"Stajic",phone:"22-11-11", email:"rankostajic@gmail.com"},
      {id:3, name:"Branko",lastName:"Riznic",phone:"33-11-11", email:"brankoriznic@gmail.com"}
    ]
  }
  addNewAccountToState =(acc)=>{
this.setState({
  accounts:[...this.state.accounts,acc]
})
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <AccountsTable accounts ={this.state.accounts} />
        </Route>
        <Route path="/add">
          <AddAccount addNewAccountToState= {this.addNewAccountToState} />
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
