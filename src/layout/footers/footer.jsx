import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
    logoLight: '/assets/images/logo/logo-dark.svg',
    logoDark: '/assets/images/logo/logo-white.svg',
    desc: "We envision a future where technology education is accessible to everyone, empowering individuals with the digital skills needed to thrive in the modern world. We strive to be a leading institution in computer education, bridging the gap between learning and industry demands through innovative, practical, and career-oriented training. we aim to provide practical and up-to-date knowledge that helps our students stay ahead in today's competitive job market",
    add: 'Sheikh Jamal Ghulzar road, Near to the Jawa Barost tokay wala chowk Shadbagh road, Lahore 54000',
    call: '+92 316 6474545',
    email: 'info@professionalitskillscollege.com',
    widgets: [
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Links',
            footer_links: [
                { link: '/', title: 'Home' },
                { link: '/about', title: 'About' },
                { link: '/course', title: 'Courses' },
                { link: '/event', title: "Events" },
                { link: '/contact-us', title: 'Contact' }
            ]
        }
    ]

}

const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;

const Footer = ({ style_2, dark_bg, home_4 }) => {
    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : "footer-lighten bg-image footer-style-1"}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a>
                                            {!dark_bg && <>
                                                {!style_2 && <img className="logo-light" src={logoLight} alt="Corporate Logo" />}
                                                <img style={{width: '100px'}} className="logo-dark" src={logoDark} alt="Corporate Logo" />
                                            </>}
                                        </a>
                                    </Link>

                                    <Link href={'/'}>
                                        <a>
                                            {dark_bg && <img style={{ width: '100px' }}  className="logo-light" src={home_4 ? '/assets/images/logo/logo-white.svg' : '/assets/images/logo/logo-white.svg'} alt="Corporate Logo" />}
                                        </a>
                                    </Link>
                                </div>

                                <p className="description">{desc}</p>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}><Link href={`/${l.link}`}><a>{l.title}</a></Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Contacts</h4>
                                <div className="inner">
                                    <div className="input-group footer-subscription-form">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                                <li><span>Address:</span>{add}</li>
                                                <li><span>Phone:</span><a href="tel:+923166474545">{call}</a></li>
                                                <li><span>Email:</span><a href="mailto:info@edublink.com" rel="noreferrer" target="_blank">{email}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Copyright {new Date().getFullYear()} PISC Designed By <a href="https://www.cadresol.com" rel="noreferrer" target="_blank">Cadresol</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;