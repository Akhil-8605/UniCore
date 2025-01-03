import React, { useState } from "react";
import "./AuthPage.css";
import Logo from "../Images/unicore logo.png"
import GoogleLogo from "../Images/google logo.png"

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={`auth-page ${isLogin ? "login-view" : "signup-view"}`}>
            <div className="auth-container">
                {/* Left Image Section */}
                <div className="image-section">
                    <img src={Logo} alt="" className="login-header-logo"/>
                    <div className="quote">
                        {isLogin ? (
                            <>
                                <p className="quote-title">A WISE QUOTE</p>
                                <h1 className="quote-text">Keep Pushing Forward</h1>
                                <p className="quote-subtitle">
                                    Log in to continue your journey and stay on track for success.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="quote-title">A WISE QUOTE</p>
                                <h1 className="quote-text">A New Beginning</h1>
                                <p className="quote-subtitle">
                                    Sign up now to start your academic journey with us.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Form Section */}
                <div className={`form-section ${isLogin ? "right" : "left"}`}>
                    <div className="form-content">
                        <h1 className="form-title">
                            {isLogin ? "Welcome Back" : "Create an Account"}
                        </h1>
                        <p className="form-subtitle">
                            {isLogin
                                ? "Enter your email and password to access your account"
                                : "Sign up to start your journey with us"}
                        </p>
                        <form>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your password" required />
                            </div>
                            {!isLogin && (
                                <div className="input-group">
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="Confirm your password" required />
                                </div>
                            )}
                            {isLogin && (
                                <div className="options">
                                    <label>
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <a href="#" className="forgot-password">
                                        Forgot Password?
                                    </a>
                                </div>
                            )}
                            <button type="submit" className="primary-btn">
                                {isLogin ? "Sign In" : "Sign Up"}
                            </button>
                            <div className="divider">OR</div>
                            <button type="button" className="google-btn">
                                {isLogin ? "Sign In with " : "Sign Up with "}
                                <img
                                    src={GoogleLogo}
                                    alt="Google"
                                    className="google-icon"
                                />
                            </button>
                        </form>
                        <p className="switch-auth">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                            <span onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? "Sign Up" : "Log In"}
                            </span>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AuthPage;
