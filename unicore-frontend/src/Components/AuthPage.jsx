import React, { useState } from "react";
import "./AuthPage.css";
import GoogleLogo from "../Images/google logo.png"

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={`auth-page ${isLogin ? "login-view" : "signup-view"}`}>
            <div className="auth-page-auth-container">

                <div className="auth-page-image-section">

                    <div className="auth-page-quote">
                        {isLogin ? (
                            <>
                                <p className="auth-page-quote-title">A WISE QUOTE</p>
                                <h1 className="auth-page-quote-text">Keep Pushing Forward</h1>
                                <p className="auth-page-quote-subtitle">
                                    Log in to continue your journey and stay on track for success.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="auth-page-quote-title">A WISE QUOTE</p>
                                <h1 className="auth-page-quote-text">A New Beginning</h1>
                                <p className="auth-page-quote-subtitle">
                                    Sign up now to start your academic journey with us.
                                </p>
                            </>
                        )}
                    </div>

                </div>

                <div className={`auth-page-form-section ${isLogin ? "right" : "left"}`}>
                    <div className="auth-page-form-content">
                        <h1 className="auth-page-form-title">
                            {isLogin ? "Welcome Back" : "Create an Account"}
                        </h1>
                        <p className="auth-page-form-subtitle">
                            {isLogin
                                ? "Enter your email and password to access your account"
                                : "Sign up to start your journey with us"}
                        </p>
                        <form>

                            <div className="auth-page-input-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>

                            <div className="auth-page-input-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your password" required />
                            </div>

                            {!isLogin && (
                                <div className="auth-page-input-group">
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="Confirm your password" required />
                                </div>
                            )}

                            {isLogin && (
                                <div className="auth-page-options">
                                    <label>
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <a href="/" className="auth-page-forgot-password">
                                        Forgot Password?
                                    </a>
                                </div>
                            )}

                            <button type="submit" className="auth-page-primary-btn">
                                {isLogin ? "Log In" : "Sign Up"}
                            </button>

                            <div className="auth-page-divider">OR</div>

                            <button type="button" className="auth-page-google-btn">
                                {isLogin ? "Sign In with " : "Sign Up with "}
                                <img
                                    src={GoogleLogo}
                                    alt="Google"
                                    className="auth-page-google-icon"
                                />
                            </button>

                        </form>

                        <p className="auth-page-switch-auth">
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
