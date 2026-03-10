import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainMenu = () => {
    const router = useRouter();

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
                    <Link href={path} style={{
                        color:
                            router.pathname === path
                                ? 'var(--color-secondary)'
                                : 'var(--color-primary)',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        borderTop: router.pathname === path
                            && '5px solid var(--color-secondary)',     
                        position: router.pathname === path && 'relative',
                        top: router.pathname === path && '-5px',
                    }}>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MainMenu;