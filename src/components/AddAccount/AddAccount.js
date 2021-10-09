import React, { Component } from "react";
import {withRouter} from "react-router-dom"

class AddAccount extends Component {
    state= {
        newAccount: {
            id:"", name:"", lastName:"", phone:"phone", email:""
        }
    }

    changeHandler = (event)=>{
        console.log(this.props)

        let id = event.target.id;
      let newAccountCopy = {...this.state.newAccount};
      newAccountCopy[id] = event.target.value;
      this.setState({newAccount:newAccountCopy})
    }

    addNewAccount = ()=>{
     this.props.addNewAccountToState(this.state.newAccount)
      this.props.history.push("/")
    }
    
    render (){
        return (

            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="dislpay-4 m-4">Add Account</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input onChange={this.changeHandler} type="text" id="id" placeholder="id" className="form-control" /><br />
                                <input onChange={this.changeHandler} type="text" id="name" placeholder="name" className="form-control" /><br />
                                <input onChange={this.changeHandler} type="text" id="lastName" placeholder="lastName" className="form-control" /><br />
                                <input onChange={this.changeHandler} type="text" id="phone" placeholder="phone" className="form-control" /><br />
                                <input onChange={this.changeHandler} type="text" id="email" placeholder="email" className="form-control" /><br />
                               <button   onClick={this.addNewAccount} className="btn btn-primary form-control">Save</button>
                                

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default withRouter(AddAccount)