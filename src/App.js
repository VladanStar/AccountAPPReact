import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

function App()  {
 
  const addNewAccountToState = (acc) => {
   
    setAccounts([...accounts, acc])
  };
  const [accounts, setAccounts] = useState([
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
  ],)

  const deleteAccount = (id) => {
    
    const newCopyAccounts = accounts.filter((account) => account.id !== id);
    setAccounts({ newCopyAccounts});
  };

  const editAccount= (acc)=>{
   
  let accountPosition =accounts.map(account => account.id).indexOf(acc.id);
  accounts[accountPosition] = acc;
  setAccounts({accounts});
  }

 
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <AccountsTable accounts={accounts} />
        </Route>
        <Route path="/add">
          <AddAccount addNewAccountToState={addNewAccountToState} />
        </Route>
        <Switch>
          <Route path="/edit/:id">
            <EditAccount editAccount={editAccount} accounts={accounts}/>
          </Route>
          <Route path="/edit">
            <EditTable
              accounts={accounts}
              deleteAccount={deleteAccount}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  
}

export default App;
