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
                <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{ width: '200px', margin: '0 auto' }} src='/assets/images/ajax-loader.gif' />
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
