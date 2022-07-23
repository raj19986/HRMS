import React, { Component } from 'react'
import AddCandidate from './candidate/addCandidate'
import { useNavigate  } from "react-router-dom";
import { Navigate } from "react-router-dom";
import addCandidate from './candidate/addCandidate'
import Register from './register'
export default class Login extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn : false
     }
   }

 handleSubmit= (event)=>{
  console.log("hnadle submit")
    this.setState({isLoggedIn : true})
        if(event.password == 'Raj')
        {
           this.setState({isLoggedIn : true})
           let navigate  = useNavigate ();
           navigate ("/add/candidate");
        }
    }
    handleClick(e) {
      <Navigate to="/dashboard" replace={true} />
  }  
  render() {
    if(this.state.isLoggedIn == true)
            {
              
              return (<AddCandidate />)
            }
    return (
        <div>
         <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.handleClick} >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>  
        </div>
    
    )
  }
}