import React from 'react';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
                <li className=""><Link href="/">Home</Link></li>
                <li className=""><Link href="/about">About</Link></li>
                <li className=""><Link href="/course">Courses</Link></li>
                <li className=""><Link href="/event">Upcoming Events</Link></li>
                <li className=""><Link href="/gallery">Gallery</Link></li>
                <li className=""><Link href="/contact-us">Contact</Link></li>
        </ul>
    )
}

export default MainMenu;