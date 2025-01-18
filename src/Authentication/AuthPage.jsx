import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { auth, provider, signInWithPopup } from "./firebase"; // Import Firebase
import "./AuthPage.css";
import GoogleLogo from "../Images/google logo.png";
import ModalOverlay from "../Components/ConformationModelOverlay";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Example login logic for multiple students and faculty
        if (username === "student1" && password === "student1") {
            login("student1", "student");
            navigate("/");
        } else if (username === "student2" && password === "student2") {
            login("student2", "student");
            navigate("/");
        } else if (username === "student3" && password === "student3") {
            login("student3", "student");
            navigate("/");
        } else if (username === "admin" && password === "admin1") {
            login("admin", "admin");
            navigate("/admin-library");
        } else if (username === "faculty1" && password === "faculty1") {
            login("faculty1", "faculty");
            navigate("/");
        } else if (username === "faculty2" && password === "faculty2") {
            login("faculty2", "faculty");
            navigate("/");
        } else if (username === "faculty3" && password === "faculty3") {
            login("faculty3", "faculty");
            navigate("/");
        } else {
            setModalMessage("Invalid credentials. Please try again.");
            setShowModal(true);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            // Assign role 'student' and navigate
            login(user.displayName || user.email, "student");
            navigate("/");
        } catch (error) {
            setModalMessage("Google sign-in failed. Please try again.");
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage("");
    };

    return (
        <div className={`auth-page ${isLogin ? "login-view" : "signup-view"}`}>
            {showModal && <ModalOverlay message={modalMessage} onClose={closeModal} />}
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
                                ? "Enter your username and password to access your account"
                                : "Sign up to start your journey with us"}
                        </p>
                        <form onSubmit={handleLogin}>
                            <div className="auth-page-input-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="auth-page-input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {!isLogin && (
                                <div className="auth-page-input-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        placeholder="Confirm your password"
                                        required
                                    />
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

                            <button
                                type="button"
                                className="auth-page-google-btn"
                                onClick={handleGoogleLogin}
                            >
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
            </div>
        </div>
    );
};

export default AuthPage;
