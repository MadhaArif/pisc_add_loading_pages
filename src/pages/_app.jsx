import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
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

function MyApp( { Component, pageProps } ) {
    const router = useRouter();
    useEffect( () => {
        sal( { threshold: 0.1, once: true } );
    }, [router.asPath] );

    useEffect( () => {
        sal();
    }, [] );
    return (
        <React.Fragment>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
            </Head>
            <Provider store={ store }>
                <ThemeProvider defaultTheme="light">
                    <MouseMoveProvider>
                        <Component { ...pageProps } />
                    </MouseMoveProvider>
                    <Theme />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    )
}

export default MyApp;
