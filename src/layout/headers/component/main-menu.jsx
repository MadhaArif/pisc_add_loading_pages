import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainMenu = () => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(router.pathname);
    }, [router.pathname]);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/course' },
        { name: 'Upcoming Events', path: '/event' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    return (
        <ul className="mainmenu">
            {menuItems.map(({ name, path }) => (
                <li key={path}>
                    <Link href={path}>
                        <a style={{
                            color:
                                currentPath === path
                                    ? 'var(--color-secondary)'
                                    : 'var(--color-primary)',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            borderTop: currentPath === path
                                ? '5px solid var(--color-secondary)'
                                : 'none',     
                            position: currentPath === path ? 'relative' : 'static',
                            top: currentPath === path ? '-5px' : '0',
                        }}>
                            {name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MainMenu;