import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { auth, provider, signInWithPopup } from "./firebase"; // Import Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Import Auth functions
import { db } from "./firebase"; // Import Firestore
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; // Firestore functions
import "./AuthPage.css";
import GoogleLogo from "../Images/google logo.png";
import ModalOverlay from "../Components/ConformationModelOverlay";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    // Function to check email and assign roles automatically
    const assignRoleBasedOnEmail = (user) => {
        let role = "student"; // Default role
        if (user.email === "admin@gmail.com") {
            role = "admin";
        }
        return role;
    };

    const handleAuth = async (e) => {
        e.preventDefault();

        // Hardcoded login functionality
        if (
            (username === "Student@gmail.com" && password === "Student@1") ||
            (username === "Admin@gmail.com" && password === "Admin@1")
        ) {
            let role = "student";
            if (username === "Admin@gmail.com") role = "admin";

            login(username, role);

            if (role === "admin") navigate("/admin");
            else navigate("/");

            return;
        }

        try {
            if (isLogin) {
                // Login existing user
                const userCredential = await signInWithEmailAndPassword(auth, username, password);
                const user = userCredential.user;

                // Assign role based on email
                const role = assignRoleBasedOnEmail(user);

                // Log the user in with their role
                login(user.email, role);
                navigate("/");
            } else {
                // Register new user
                const userCredential = await createUserWithEmailAndPassword(auth, username, password);
                const user = userCredential.user;

                // Check if user already exists in Firestore
                const userQuery = query(collection(db, "users"), where("uid", "==", user.uid));
                const userSnapshot = await getDocs(userQuery);

                if (userSnapshot.empty) {
                    // Add new user to Firestore with role 'student' by default
                    await addDoc(collection(db, "users"), {
                        uid: user.uid,
                        email: user.email,
                        role: "student"
                    });
                }

                // Log the user in after successful sign up
                const role = assignRoleBasedOnEmail(user);
                login(user.email, role);
                navigate("/");
            }
        } catch (error) {
            setModalMessage(error.message);
            setShowModal(true);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Fetch user details from Google login
            const userData = {
                email: user.email,
                role: user.email === "akhileshadam186@gmail.com"
                    ? "admin"
                    : user.email === "onkarsakv99@gmail.com"
                        ? "admin"
                        : user.email === "balajikokkul13@gmail.com"
                            ? "student"
                            : user.email === "sanjukanaki@gmail.com"
                                ? "student"
                                : user.email === "matetisantosh37@gmail.com"
                                    ? "student"
                                    : "student",
                displayName: user.displayName || "", // Ensure displayName is set
                uid: user.uid, // Get user's UID from Firebase Auth
            };

            // Check if the user already exists in Firestore
            const userQuery = query(collection(db, "users"), where("uid", "==", userData.uid));
            const userSnapshot = await getDocs(userQuery);

            if (userSnapshot.empty) {
                // Add new user to Firestore if not already present
                await addDoc(collection(db, "users"), {
                    uid: userData.uid,
                    email: userData.email,
                    displayName: userData.displayName,
                    role: userData.role,
                });
            }

            // Store user data using the login function from AuthContext
            login(userData);

            // Redirect user based on role
            if (userData.role === "admin") navigate("/admin");
            else navigate("/");
        } catch (error) {
            setModalMessage(`Google sign-in failed: ${error.message}`);
            console.error("Google sign-in error:", error);
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
                        <form onSubmit={handleAuth}>
                            <div className="auth-page-input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="auth-page-input-group">
                                <label>Password</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span
                                        className="toggle-password"
                                        title="Click to hide password"
                                        onClick={(e) => {
                                            const input = e.target.previousSibling;
                                            if (input.type === 'password') {
                                                input.type = 'text'; e.target.innerText = '🙈';
                                            } else {
                                                input.type = 'password';
                                                e.target.innerText = '👀';
                                            }
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '0px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }} > 👀 </span>
                                </div>
                            </div>

                            {!isLogin && (
                                <div className="auth-page-input-group">
                                    <label>Confirm Password</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="password"
                                            placeholder="Confirm your password"
                                            required
                                        />
                                        <span
                                            className="toggle-password"
                                            title="Click to hide password"
                                            onClick={(e) => {
                                                const input = e.target.previousSibling;
                                                if (input.type === 'password') {
                                                    input.type = 'text'; e.target.innerText = '🙈';
                                                } else {
                                                    input.type = 'password';
                                                    e.target.innerText = '👀';
                                                }
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                right: '0px',
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer'
                                            }} > 👀 </span>
                                    </div>
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
