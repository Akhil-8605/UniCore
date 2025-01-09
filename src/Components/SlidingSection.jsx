import React, { useEffect, useRef, useState } from "react";
import "./SlidingSection.css";

const SlidingSection = ({ text }) => {
    const texts = Array(50).fill(text);

    const slidingRowRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left
    let lastScrollY = useRef(window.scrollY);
    let idleAnimationFrame = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            if (slidingRowRef.current) {
                const currentTransform = parseFloat(
                    getComputedStyle(slidingRowRef.current).getPropertyValue("--translate-x")
                ) || 0;
                const newTransform = currentTransform + delta * 0.8; // Smooth scroll adjustment
                slidingRowRef.current.style.setProperty("--translate-x", `${newTransform}px`);

                // Update direction based on delta
                setDirection(delta > 0 ? 1 : -1);
            }

            lastScrollY.current = currentScrollY;
        };

        const throttledScroll = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", throttledScroll);

        return () => {
            window.removeEventListener("scroll", throttledScroll);
        };
    }, []);

    useEffect(() => {
        // Smooth idle animation
        const smoothIdle = () => {
            if (!isScrolling && slidingRowRef.current) {
                const currentTransform = parseFloat(
                    getComputedStyle(slidingRowRef.current).getPropertyValue("--translate-x")
                ) || 0;
                const newTransform = currentTransform + direction * 0.8; // Slower idle movement
                slidingRowRef.current.style.setProperty("--translate-x", `${newTransform}px`);
            }

            idleAnimationFrame.current = requestAnimationFrame(smoothIdle);
        };

        idleAnimationFrame.current = requestAnimationFrame(smoothIdle);

        return () => {
            if (idleAnimationFrame.current) {
                cancelAnimationFrame(idleAnimationFrame.current);
            }
        };
    }, [isScrolling, direction]);

    useEffect(() => {
        const resetIdleState = () => setIsScrolling(false);
        const debounceTimer = setTimeout(resetIdleState, 100);

        return () => clearTimeout(debounceTimer);
    }, [isScrolling]);

    return (
        <div className="sliding-section">
            <div className="sliding-row" ref={slidingRowRef}>
                {texts.map((item, index) => (
                    <span key={index} className="sliding-text">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SlidingSection;
