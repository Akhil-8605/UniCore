import React, { useState, useEffect } from 'react';
import './OurRecruitersSection.css';
import SlidingSection from '../../Components/SlidingSection';

import img1 from '../../Images/Our Recruiters img1.jpg';
import img2 from '../../Images/Our Recruiters img2.jpg';
import img3 from '../../Images/Our Recruiters img3.jpg';
import img4 from '../../Images/Our Recruiters img4.jpg';
import img5 from '../../Images/Our Recruiters img5.jpg';
import img6 from '../../Images/Our Recruiters img6.jpg';
import img7 from '../../Images/Our Recruiters img7.jpg';
import img8 from '../../Images/Our Recruiters img8.jpg';
import img9 from '../../Images/Our Recruiters img9.jpg';
import img10 from '../../Images/Our Recruiters img10.jpg';
import img11 from '../../Images/Our Recruiters img11.jpg';
import img12 from '../../Images/Our Recruiters img12.jpg';
import img13 from '../../Images/Our Recruiters img13.jpg';
import img14 from '../../Images/Our Recruiters img14.jpg';
import img15 from '../../Images/Our Recruiters img15.jpg';

const images = [
    {
        src: img1,
        name: "TATA Motors & Consultancy",
        description: "TATA Motors is a leading automotive manufacturer in India, offering a wide range of vehicles, including passenger cars and commercial vehicles. TATA Consultancy Services provides IT services, consulting, and business solutions worldwide."
    },
    {
        src: img2,
        name: "Bajaj Auto",
        description: "Bajaj Auto is one of the largest motorcycle manufacturers in India, known for its performance bikes and scooters. It has a global presence in more than 70 countries."
    },
    {
        src: img10,
        name: "Mahindra Motors",
        description: "Mahindra Motors is a major player in the automotive industry, offering a range of vehicles including SUVs, electric cars, and commercial vehicles. The brand is known for innovation and sustainability."
    },
    {
        src: img3,
        name: "BSA Corporation Limited",
        description: "BSA Corporation Limited specializes in manufacturing and providing high-quality industrial products and solutions, with a strong commitment to excellence and customer satisfaction."
    },
    {
        src: img14,
        name: "SULZER",
        description: "SULZER is a global leader in pumping solutions, delivering services for the oil and gas, water, and wastewater sectors. They focus on energy-efficient and reliable solutions."
    },
    {
        src: img12,
        name: "Precision",
        description: "Precision is a leading manufacturer of industrial machinery and components. It is known for its precision engineering, providing products that are vital to various manufacturing sectors."
    },
    {
        src: img7,
        name: "ETON",
        description: "ETON is a major manufacturer of automotive parts and components, focusing on innovation, quality, and durability. It supplies products to some of the world’s most renowned automakers."
    },
    {
        src: img11,
        name: "PIAGGO",
        description: "PIAGGO is an Italian brand known for its iconic scooters and motorcycles. It has been a symbol of style and mobility across various countries, offering both urban and adventure vehicles."
    },
    {
        src: img9,
        name: "L&T (Larsen & Toubro)",
        description: "L&T is a major multinational conglomerate providing engineering, construction, manufacturing, and financial services. It is a significant player in infrastructure development worldwide."
    },
    {
        src: img15,
        name: "VISHAY",
        description: "VISHAY is a global manufacturer of electronic components, providing solutions in semiconductors, passive components, and optoelectronics for a wide range of industries."
    },
];

const RecruitersSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // Start interval for image cycling
        const id = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // Change image every 7 seconds

        setIntervalId(id); // Set the interval ID

        return () => clearInterval(id); // Cleanup on component unmount
    }, []);

    const handleImageClick = (index) => {
        clearInterval(intervalId); // Stop the current interval
        setCurrentImageIndex(index); // Set clicked image as active
        const newId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // Restart cycle from clicked image
        setIntervalId(newId); // Update the interval ID
    };

    return (
        <>
            <SlidingSection text={"Our Recruiters"} />
            <section className="recruiters-section">
                <div className="recruiters-section-logos-container">
                    <div className="recruiters-section-logo-row">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={`Company ${index + 1}`}
                                className={currentImageIndex === index ? 'active' : ''}
                                draggable="false"
                                onClick={() => handleImageClick(index)} // Add click handler
                            />
                        ))}
                    </div>
                    <div className="recruiters-section-active-img-company-details">
                        <h3>{images[currentImageIndex].name}</h3>
                        <p>{images[currentImageIndex].description}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecruitersSection;
