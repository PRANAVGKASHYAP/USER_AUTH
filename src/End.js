import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userDetails'

function End() {
  return (
    <En/>
  )
}

class En extends React.Component{
    render(){
        return<div className="LApp">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              CHATTING APP
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/start'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/end'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
              <SignUp/>
          </div>
        </div>
      </div>
    }
}

export default End