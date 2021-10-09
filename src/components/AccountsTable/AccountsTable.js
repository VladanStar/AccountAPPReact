import React from "react";
import Account from "../Account/Account";
import "./AccountsTable.css";

const AccountsTable = ({ accounts }) => {
  const allAccounts = accounts.map((account) => {
    return <Account account={account} key={account.id} />;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="display-4 m-4">
            <div className="row">
              <div className="col-10 offset-1">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>LastName</th>
                      <th>Phone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>{allAccounts}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsTable;
