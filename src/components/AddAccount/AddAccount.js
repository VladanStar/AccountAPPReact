import React, { useState } from "react";
import { withRouter } from "react-router-dom";



function AddAccount(props) {

  const [newAccount, setNewAccount] = useState({
    id: "",
    name: "",
    lastName: "",
    phone: "phone",
    email: "",
  });

  const addNewAccount = () => {
    props.addNewAccountToState(newAccount);
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="dislpay-4 m-4">Add Account</h2>
          <div className="row">
            <div className="col-10 offset-1">
              <input
            
                onChange={(e) => {
                  setNewAccount({ ...newAccount,id:e.target.value });
                }}
                type="text"
                placeholder="id"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) => {
                  setNewAccount({ ...newAccount,name:e.target.value });
                }}
                type="text"
                placeholder="name"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) => {
                  setNewAccount({ ...newAccount,lastName:e.target.value });
                }}
                type="text"
                placeholder="lastName"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) => {
                  setNewAccount({ ...newAccount,phone:e.target.value });
                }}
                type="text"
                placeholder="phone"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) => {
                  setNewAccount({ ...newAccount,email:e.target.value });
                }}
                type="text"
                placeholder="email"
                className="form-control"
              />
              <br />
              <button
                onClick={addNewAccount
                }
                className="btn btn-primary form-control"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(AddAccount);
