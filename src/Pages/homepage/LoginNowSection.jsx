import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginNowSection.css"
import { useAuth } from '../../Authentication/AuthProvider'
function LoginNow() {
    const { user } = useAuth();
    return (
        <>
            {!user ? (
                <div className='log-in-now'>
                    <div className='log-in-now-section1'></div>
                    <div className='log-in-now-section2'></div>
                    <div className='log-in-now-section3'></div>
                    <div className='log-in-now-data'>
                        <h1>Login Now To Access All Features Of Website</h1>
                        <a href={'/login'}><button className="header-section-login-btn">Click Here to Log In</button></a>
                    </div>
                    <div className='log-in-now-section4'></div>
                    <div className='log-in-now-section5'></div>
                    <div className='log-in-now-section6'></div>
                </div>
            ): ''}
        </>
    )
}

export default LoginNow
