import React from 'react'
import '../index.css'
import {Navbar} from "../components/Navbar.jsx";
import {Password} from "../components/Login/Password.jsx"
const Login = () => {
    return (
        <>
            <Navbar/>
            <Password/>
        </>
    )
}

export default Login