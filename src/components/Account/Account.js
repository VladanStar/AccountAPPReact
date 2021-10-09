import React from "react";

const Account = ({account, edit, deleteAccount})=>{
    const actionButtons = edit ? (
        <>
        <td><button  onClick={()=>{deleteAccount(account.id)}} className="btn btn-danger">Delete</button></td>
        <td><button className="btn btn-warning">Edit</button></td>
        </>
    ) : null;
return (
    <tr>
    <td>{account.id}</td>
    <td>{account.name}</td>
    <td>{account.lastName}</td>
    <td>{account.phone}</td>
    <td>{account.email}</td>
    {actionButtons}
   
    </tr>
)
};
export default Account;
