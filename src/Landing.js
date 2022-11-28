import React from 'react'
import './Langing.css'
import Logo from './images/logo-white.png'

//to create router links
import { BrowserRouter, Route , Routes, Link} from "react-router-dom";
import App from './App'
/*
function Paths(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Land/>}></Route>
            </Routes>
            <Routes>
                <Route path='/login' element={<App/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
*/
function Land()
{
    return(
        <div>
        <header class="header">
        <div class="logo-box">
        <img src={Logo} alt="page logo" class="logo"/>
        </div>
        <div class="text-box">
        <h1>
            <span class="header-sub-main">CHATTER BOX</span>
            <span class="header-sub-bottom">Where Students Gather</span>
        </h1>
        <a href="http://localhost:3000/start" class="btn btn-white btn-animated">Get Started</a>
        </div>
        </header>
        </div>
    )
}

export default Land
//export default Paths