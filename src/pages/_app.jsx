import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import sal from 'sal.js';
import { ThemeProvider } from 'next-themes';
if (typeof window !== 'undefined') {
  require( 'bootstrap/dist/js/bootstrap' );
}
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/index.scss';
import { store } from '../redux/store';
import Theme from '../components/common/theme';
import { MouseMoveProvider } from '../contexts/mouse-move-context';
import Preloader from '../components/common/preloader';

function MyApp( { Component, pageProps } ) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        sal( { threshold: 0.1, once: true } );
    }, [router.asPath] );

    useEffect( () => {
        sal();
        // Remove loader quickly and show website with all content
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); // Very quick - only 0.3 seconds
        return () => clearTimeout(timer);
    }, [] );

    return (
        <React.Fragment>
            <Head>
            </Head>
            <Provider store={ store }>
                <ThemeProvider defaultTheme="light">
                    <MouseMoveProvider>
                        {loading ? (
                            <Preloader />
                        ) : (
                            <Component { ...pageProps } />
                        )}
                    </MouseMoveProvider>
                    <Theme />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    )
}

export default MyApp;
