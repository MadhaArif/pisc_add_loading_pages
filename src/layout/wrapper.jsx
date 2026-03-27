import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import { get_cart_courses } from '../redux/features/cart-slice';
import { get_wishlist_products } from '../redux/features/wishlist-slice';
import CustomCursor from '../components/common/custom-cursor';

export default function Wrapper({ children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    useEffect(() => {
        dispatch(get_wishlist_products());
        dispatch(get_cart_courses());
    }, [dispatch]);

    const handleWhatsAppClick = () => {
            const phoneNumber = '923166474545';
            const whatsappURL = `https://wa.me/${phoneNumber}`;
            window.open(whatsappURL, '_blank');
        };

    return (
        <>
            <CustomCursor />
            {loading ? (
                <div className="page-loader-overlay">
                    <div className="page-loader-container">
                        {/* Modern Ring Loader */}
                        <div className="ring-loader">
                            <div className="ring ring-1"></div>
                            <div className="ring ring-2"></div>
                            <div className="ring ring-3"></div>
                            <div className="center-glow"></div>
                        </div>
                        
                        {/* Loading Text */}
                        <div className="loader-text">LOADING</div>
                        
                        {/* Progress Dots */}
                        <div className="progress-dots">
                            <span className="dot dot-1"></span>
                            <span className="dot dot-2"></span>
                            <span className="dot dot-3"></span>
                        </div>
                    </div>
                    
                    <style jsx global>{`
                        .page-loader-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100vh;
                            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 99998;
                            overflow: hidden;
                        }
                        
                        /* Animated background */
                        .page-loader-overlay::before {
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            background: radial-gradient(circle at 50% 50%, rgba(0, 168, 255, 0.08) 0%, transparent 60%);
                            animation: bgPulse 3s ease-in-out infinite;
                        }
                        
                        @keyframes bgPulse {
                            0%, 100% { opacity: 0.5; }
                            50% { opacity: 1; }
                        }
                        
                        .page-loader-container {
                            position: relative;
                            z-index: 1;
                            text-align: center;
                        }
                        
                        /* Ring Loader */
                        .ring-loader {
                            position: relative;
                            width: 80px;
                            height: 80px;
                            margin: 0 auto 25px;
                        }
                        
                        .ring {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            border: 3px solid transparent;
                        }
                        
                        .ring-1 {
                            border-top-color: #00a8ff;
                            border-right-color: #00a8ff;
                            animation: spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
                            filter: drop-shadow(0 0 10px rgba(0, 168, 255, 0.6));
                        }
                        
                        .ring-2 {
                            top: 10px;
                            left: 10px;
                            right: 10px;
                            bottom: 10px;
                            border-top-color: #007bff;
                            border-left-color: #007bff;
                            animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse;
                            filter: drop-shadow(0 0 10px rgba(0, 123, 255, 0.6));
                        }
                        
                        .ring-3 {
                            top: 20px;
                            left: 20px;
                            right: 20px;
                            bottom: 20px;
                            border-bottom-color: #00d4ff;
                            border-left-color: #00d4ff;
                            animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
                            filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.6));
                        }
                        
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        
                        .center-glow {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 40px;
                            height: 40px;
                            background: radial-gradient(circle, rgba(0, 168, 255, 0.6) 0%, transparent 70%);
                            border-radius: 50%;
                            animation: glowPulse 1.5s ease-in-out infinite;
                            filter: blur(8px);
                        }
                        
                        @keyframes glowPulse {
                            0%, 100% {
                                opacity: 0.4;
                                transform: translate(-50%, -50%) scale(0.8);
                            }
                            50% {
                                opacity: 1;
                                transform: translate(-50%, -50%) scale(1.2);
                            }
                        }
                        
                        /* Loader Text */
                        .loader-text {
                            color: #00a8ff;
                            font-size: 16px;
                            font-weight: 700;
                            letter-spacing: 8px;
                            font-family: 'Poppins', sans-serif;
                            text-transform: uppercase;
                            margin-bottom: 20px;
                            animation: textGlow 2s ease-in-out infinite;
                        }
                        
                        @keyframes textGlow {
                            0%, 100% {
                                opacity: 0.6;
                                text-shadow: 0 0 10px rgba(0, 168, 255, 0.5);
                            }
                            50% {
                                opacity: 1;
                                text-shadow: 0 0 20px rgba(0, 168, 255, 0.8), 0 0 30px rgba(0, 168, 255, 0.4);
                            }
                        }
                        
                        /* Progress Dots */
                        .progress-dots {
                            display: flex;
                            gap: 10px;
                            justify-content: center;
                            align-items: center;
                        }
                        
                        .dot {
                            width: 8px;
                            height: 8px;
                            background: linear-gradient(135deg, #00a8ff, #007bff);
                            border-radius: 50%;
                            animation: dotBounce 1.4s ease-in-out infinite;
                            box-shadow: 0 0 10px rgba(0, 168, 255, 0.6);
                        }
                        
                        .dot-1 {
                            animation-delay: 0s;
                        }
                        
                        .dot-2 {
                            animation-delay: 0.2s;
                        }
                        
                        .dot-3 {
                            animation-delay: 0.4s;
                        }
                        
                        @keyframes dotBounce {
                            0%, 40%, 100% {
                                transform: translateY(0) scale(1);
                                opacity: 0.6;
                            }
                            20% {
                                transform: translateY(-15px) scale(1.2);
                                opacity: 1;
                                box-shadow: 0 0 20px rgba(0, 168, 255, 0.9);
                            }
                        }
                    `}</style>
                </div>
            ) : (   
                <>
                    { children }
                        <img onClick={handleWhatsAppClick} style={{zIndex: 100, width: '70px', cursor: 'pointer', position: 'fixed', bottom: '50px', right: '30px'}} src="/assets/images/whatsapp.svg" />
                    <ToastContainer />
                </>
            )}
        </>
    )
}
