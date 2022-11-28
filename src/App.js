import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userDetails'
import Start from './Start'
import Land from './Landing'
import End from './End'

function LApp() {
  return (
    <Router>
            <Routes>
              <Route exact path="/" element={<Land />} />
			  <Route path='/start' element={<Start/>}/>
			  <Route path='/end' element={<End/>}/>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="userDetails" element ={<UserDetails/>}/>
            </Routes>
    </Router>
  )
}

export default LApp