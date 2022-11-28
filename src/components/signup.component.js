import React, { Component } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      f_name:"",
      l_name:"",
      mail:"",
      password:'',
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {f_name,l_name,mail,password}=this.state;
    console.log(f_name,l_name,mail,password);
    fetch("http://localhost:5000/register",{
      method:'POST',
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        f_name,
        mail,
        l_name,
        password,
      }),
    })
    .then( (res)=>res.json())
    .then( (data)=>{
      console.log(data,"user is registered") 

      //if(data.status == 'ok'){
        //alert('sign in succesfull')
        //window.localStorage.setItem("token",data.data)
        //window.location.href="./userDetails"
      //} 

    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>this.setState({f_name : e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name"
          onChange={(e)=>this.setState({l_name : e.target.value})}
           />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({mail : e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password : e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
