import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-history">
          {/* <h2 className="about-title">Our Legacy of Excellence</h2> */}
          <p className="about-text">
            uniCore is celebrating 27 years of its glory in the field of technical education. 
            On this occasion, let's ignite the memories of this journey of our institute. The visionary man 
            Hon. Late Brahmadevdada Mane always thought about the bright future of youth residing in the 
            rural area and knew very well that students of rural area do not have technical education 
            facilities and it was a serious problem during those early days and decided to establish the 
            institute to provide a technical education.
          </p>
          <p className="about-text">
            In year 1998, the first brick of uniCore was laid, marking the beginning of a 
            transformative journey in technical education. Today, the institute has been successfully giving 
            direction to thousands of students under the dynamic leadership of Hon. President Mr. Diliprao Mane.
          </p>
        </div>

        <div className="about-section-vision-mission-container">
          <div className="about-section-vision-box">
            <h3>OUR VISION</h3>
            <p>
              "To be a reputed institute preparing competent engineers with professional skills 
              favourable to the industry and society"
            </p>
          </div>

          <div className="about-section-mission-box">
            <h3>OUR MISSION</h3>
            <ul className="about-section-mission-list">
              <li>
                To provide pertinent technical education and training to support students goal.
              </li>
              <li>
                To provide platform for development of personality traits like professional attitude, 
                communication skills and ethical values to produce competent engineers.
              </li>
              <li>
                To inspire students towards life-long learning and helping them to find right career 
                opportunities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;