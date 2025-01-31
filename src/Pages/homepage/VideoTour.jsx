import React from 'react';
import './VideoTour.css';
import SlidingSection from '../../Components/SlidingSection';

const VideoTour = () => {
    return (
        <section className="video-section">
            <div className="video-container">
                <h2 className="video-title"><SlidingSection text={"Enjoy Our Digital Tour @Unicore"}/></h2>
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/RbvLCB9eGgI?si=iVUTzoOvTWUns3fp"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoTour;