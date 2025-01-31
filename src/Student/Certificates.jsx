import React, { useState } from "react";
import "./Certificates.css";
import StudentPortalLayout from "./StudentPortalLayout";
import { X, Award, Download, Eye, Bookmark } from "lucide-react";
import img from "./sample-certificate.png";

const certificates = [
    {
        id: 1,
        name: "Diploma S22",
        type: "Diploma",
        imageUrl: img,
    },
    {
        id: 2,
        name: "Diploma S23",
        type: "Diploma",
        imageUrl: img,
    },
    {
        id: 3,
        name: "Diploma W23",
        type: "Diploma",
        imageUrl: img,
    },
    {
        id: 4,
        name: "Diploma S24",
        type: "Diploma",
        imageUrl: img,
    },
    {
        id: 5,
        name: "Diploma W24",
        type: "Diploma",
        imageUrl: img,
    },
];

const CertificatesPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="certificates-page-certificates-container">
            <StudentPortalLayout />
            <main className="certificates-page-certificates-main">
                <div className="certificates-page-certificates-content">
                    <h1>My Certificates</h1>
                    <br />

                    <div className="certificates-page-certificate-grid">
                        {certificates.map((cert) => (
                            <div key={cert.id} className="certificates-page-certificate-card">
                                <div className="certificates-page-certificate-card-header">
                                    <div className="certificates-page-certificate-icon">
                                        <Award size={24} />
                                    </div>
                                    <h3>{cert.name}</h3>
                                </div>
                                <div className="certificates-page-certificate-card-content">
                                    <p className="certificates-page-certificate-info">
                                        <Bookmark size={16} />
                                        <span>{cert.type}</span>
                                    </p>
                                </div>
                                <div className="certificates-page-certificate-card-footer">
                                    <button
                                        className="certificates-page-card-button view"
                                        onClick={() => setSelectedImage(cert.imageUrl)}
                                    >
                                        <Eye size={16} />
                                        <span>View</span>
                                    </button>
                                    <a
                                        href={cert.imageUrl}
                                        download={`${cert.name.replace(/\s+/g, "_")}.jpg`}
                                        className="certificates-page-card-button download"
                                        style={{textDecoration: 'none'}}
                                    >
                                        <Download size={16} />
                                        <span>Download</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedImage && (
                        <ImageViewerModal
                            imageUrl={selectedImage}
                            onClose={() => setSelectedImage(null)}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

const ImageViewerModal = ({ imageUrl, onClose }) => (
    <div className="certificates-page-image-viewer-overlay">
        <div className="certificates-page-image-viewer-content">
            <button className="certificates-page-image-viewer-close" onClick={onClose}>
                <X size={24} />
            </button>
            <img
                src={imageUrl || "/placeholder.svg"}
                alt="Certificate"
                className="certificates-page-image-viewer-img"
            />
        </div>
    </div>
);

export default CertificatesPage;
