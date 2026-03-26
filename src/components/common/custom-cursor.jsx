import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveMouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e) => {
            if (e.target.closest('a, button, .cursor-pointer, input, textarea, .edu-btn')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <div className="custom-cursor-wrapper d-none d-lg-block">
            <div 
                className={`cursor-dot ${isHovering ? 'hover' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
            <div 
                className={`cursor-outline ${isHovering ? 'hover' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
            <style jsx global>{`
                .cursor-dot {
                    position: fixed;
                    width: 6px;
                    height: 6px;
                    background-color: #1ab69d;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10001;
                    transform: translate(-50%, -50%);
                    transition: width 0.2s ease-in-out, height 0.2s ease-in-out, left 0.05s ease-out, top 0.05s ease-out;
                }
                .cursor-dot.hover {
                    width: 0px;
                    height: 0px;
                }
                .cursor-outline {
                    position: fixed;
                    width: 35px;
                    height: 35px;
                    border: 1.5px solid #1ab69d;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    mix-blend-mode: difference;
                    transform: translate(-50%, -50%);
                    transition: width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out, border-color 0.3s ease-out, left 0.15s ease-out, top 0.15s ease-out;
                }
                .cursor-outline.hover {
                    width: 50px;
                    height: 50px;
                    background-color: rgba(26, 182, 157, 0.1);
                    border-color: #ee4a62;
                }
            `}</style>
        </div>
    );
};

export default CustomCursor;
