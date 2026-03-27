import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fade out very quickly to show website
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 250); // Fade just before loader is removed (at 300ms)
    
    return () => clearTimeout(fadeOutTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader-overlay">
      <div className="preloader-container">
        {/* Modern Loading Sign */}
        <div className="loading-sign-wrapper">
          <div className="loading-sign">
            <div className="sign-circle">
              <div className="spinner-ring"></div>
              <div className="spinner-dot"></div>
            </div>
            <div className="loading-text">LOADING</div>
          </div>
        </div>
        
        {/* Brand Name */}
        <div className="brand-text">PISC</div>
      </div>
      
      <style jsx global>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          overflow: hidden;
        }
        
        /* Subtle animated gradient overlay */
        .preloader-overlay::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 123, 255, 0.08) 0%, transparent 60%);
          animation: softPulse 3s ease-in-out infinite;
        }
        
        @keyframes softPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .preloader-container {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        
        /* Loading Sign Wrapper */
        .loading-sign-wrapper {
          margin-bottom: 30px;
        }
        
        /* Loading Sign */
        .loading-sign {
          display: inline-block;
        }
        
        .sign-circle {
          position: relative;
          width: 70px;
          height: 70px;
          margin: 0 auto 15px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0056b3 0%, #003d80 100%);
          box-shadow: 
            0 4px 20px rgba(0, 123, 255, 0.5),
            0 8px 40px rgba(0, 123, 255, 0.3),
            inset 0 2px 5px rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: circleFloat 2s ease-in-out infinite;
        }
        
        @keyframes circleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .spinner-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #00a8ff;
          border-right-color: #00a8ff;
          animation: spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .spinner-dot {
          position: relative;
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 15px rgba(0, 168, 255, 0.8);
          animation: dotPulse 1.5s ease-in-out infinite;
        }
        
        @keyframes dotPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.3);
            opacity: 0.8;
          }
        }
        
        .loading-text {
          color: #00a8ff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 6px;
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
          animation: textBlink 1.5s ease-in-out infinite;
        }
        
        @keyframes textBlink {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        /* Brand Text */
        .brand-text {
          color: #00a8ff;
          font-size: 42px;
          font-weight: 800;
          letter-spacing: 18px;
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
          position: relative;
          background: linear-gradient(90deg, #00a8ff 0%, #007bff 50%, #00a8ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 2s linear infinite;
          filter: drop-shadow(0 2px 15px rgba(0, 168, 255, 0.5));
        }
        
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        /* Underline accent */
        .brand-text::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00a8ff, transparent);
          border-radius: 2px;
          animation: expandLine 2s ease-in-out infinite;
        }
        
        @keyframes expandLine {
          0%, 100% { 
            width: 30px;
            opacity: 0.4;
          }
          50% { 
            width: 80px;
            opacity: 1;
          }
        }
        
        /* Fade out transition */
        .preloader-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Smooth scaling */
        .sign-circle,
        .spinner-dot,
        .brand-text {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
