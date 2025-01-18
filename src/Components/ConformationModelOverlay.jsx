import React from 'react'
import "./ConformationModelOverlay.css"

const ConformationModelOverlay= ({ message, onClose }) => {
    return (
        <div className="confirmation-modal-overlay">
            <div className="confirmation-modal-content">
                <button className="confirmation-modal-close" onClick={onClose}>
                    ✖
                </button>
                <p className="confirmation-modal-message">{message}</p>
                <button className="confirmation-modal-ok" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
}

export default ConformationModelOverlay
