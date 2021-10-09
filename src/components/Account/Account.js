import React from "react";

const Account = ({account})=>{
return (
    <tr>
    <td>{account.id}</td>
    <td>{account.name}</td>
    <td>{account.lastname}</td>
    <td>{account.phone}</td>
    <td>{account.email}</td>
    </tr>
)
};
export default Account;
