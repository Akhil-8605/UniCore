import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageGallery.css';
import CampusImg from "../../Images/campus-img.png"
import CampusImg1 from "../../Images/campus-img1.png"
import CampusImg2 from "../../Images/campus-img2.png"
import CampusImg3 from "../../Images/campus-img3.png"
import CampusImg4 from "../../Images/campus-img-students.png"
import CampusImg5 from "../../Images/campus-img4.png"
import CampusImgStudents from "../../Images/campus-img-students2.png"
import CampusImgLibrary from "../../Images/campus-img-library.png"

const images = [
    {
        url: CampusImg,
        caption: "Campus"
    },
    {
        url: CampusImg1,
        caption: "Campus"
    },
    {
        url: CampusImg2,
        caption: "Campus Ground"
    },
    {
        url: CampusImg3,
    },
    {
        url: CampusImg4,
    },
    {
        url: CampusImg5,
    },
    {
        url: CampusImgStudents,
    },
    {
        url: CampusImgLibrary,
        caption: "Librabry"
    },
];

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const handlePrevious = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrevious();
        }
    };

    return (
        <div className="gallery-container">
            <div
                className="gallery-slide"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="gallery-image"
                    style={{
                        backgroundImage: `url(${images[currentIndex].url})`,
                    }}
                >
                    <div className="gallery-image-overlay">
                        <div className="gallery-caption-container">
                            <h3 className="gallery-caption-title">{images[currentIndex].caption}</h3>
                            <div className="gallery-progress-indicators">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`gallery-progress-dot ${currentIndex === index ? 'active' : 'inactive'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handlePrevious}
                    className="gallery-nav-button prev"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="gallery-nav-icon" />
                </button>
                <button
                    onClick={handleNext}
                    className="gallery-nav-button next"
                    aria-label="Next image"
                >
                    <ChevronRight className="gallery-nav-icon" />
                </button>
            </div>

            <div className="gallery-thumbnails-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`gallery-thumbnail ${currentIndex === index ? 'active' : 'inactive'
                            }`}
                    >
                        <img
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-full gallery-object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;