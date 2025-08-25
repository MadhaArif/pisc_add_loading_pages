import Link from 'next/link';
import React, { useState } from 'react';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useSticky from '../../hooks/use-sticky';
import MainMenu from './component/main-menu';
import HeaderTopRight from "./component/header-top-right";

const HeaderTwo = ({ style_3, no_topBar = false }) => {
    const { sticky } = useSticky();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className={`edu-header header-style-${style_3 ? '3' : '2'} ${no_topBar ? 'no-topbar' : ''}`}>
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <HeaderTopRight />
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img className="logo-light" style={{ width: '100px' }} src={style_3 ? '/assets/images/logo/logo-white.svg' : "/assets/images/logo/logo-white.svg"} alt="Corporate Logo" />
                                            <img className="logo-dark" style={{ width: '100px' }} src={style_3 ? '/assets/images/logo/logo-dark.svg' : "/assets/images/logo/logo-dark.svg"} alt="Corporate Logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    <MainMenu />
                                </nav>
                            </div>

                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="header-btn">
                                        <a href="/contact-us" className="edu-btn btn-primary">
                                            Inquire Us <i className="icon-4"></i>
                                        </a>
                                    </li>


                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)}>
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Search Popup  --> */}
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
                {/* <!-- End Search Popup  --> */}
            </header>

            {/* sidebar start */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* sidebar end */}
        </>
    )
}

export default HeaderTwo;