import React, { useState, useEffect } from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    const [containerColor, setContainerColor] = useState("red");

    const toggleColor = () => {
        if (containerColor === "#007bff") {
            setContainerColor("red");
        } else {
            setContainerColor("#007bff");
        }
    }

    return (
        <div className="error-container" style={{ color: containerColor }}>
            <h1 className="error-title">Error !</h1>
            <p className="error-message">
                Oops! The page you are looking for does not exist.
            </p>
            <a
                onClick={() => {
                    navigate("/login");
                }}
                className="error-back-button"
                onMouseEnter={toggleColor}
                onMouseLeave={toggleColor}
            >
                Back to Login
            </a>
        </div>
    );
};

export default Error;
