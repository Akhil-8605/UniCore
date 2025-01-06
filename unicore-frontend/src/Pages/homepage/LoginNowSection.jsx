import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginNowSection.css"
function LoginNow() {
    return (
        <>
            
            <div className='log-in-now'>
                <div className='log-in-now-section1'></div>
                <div className='log-in-now-section2'></div>
                <div className='log-in-now-section3'></div>
                <div className='log-in-now-data'>
                    <h1>Login Now To Access All Features Of Website</h1>
                    <Link to={'/login'}><button className="login-btn">Click Here to Log In</button></Link>
                </div>
                <div className='log-in-now-section4'></div>
                <div className='log-in-now-section5'></div>
                <div className='log-in-now-section6'></div>
            </div>
        </>
    )
}

export default LoginNow
