import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Route, BrowserRouter } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";

class App extends Component {
  state = {
    accounts:[
      {id:1, name:"Vladan",lastname:"Cupric",phone:"11-11-11", email:"vladancupric@gmail.com"},
      {id:2, name:"Ranko",lastname:"Stajic",phone:"22-11-11", email:"rankostajic@gmail.com"},
      {id:3, name:"Branko",lastname:"Riznic",phone:"33-11-11", email:"brankoriznic@gmail.com"}
    ]
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route to="/">
          <AccountsTable accounts ={this.state.accounts} />

        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
