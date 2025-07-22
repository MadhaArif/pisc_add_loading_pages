import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AdBanner = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper bg-image" style={{ background: 'var(--color-primary)'}}>
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title" style={{ color: '#fff', fontSize: '45px' }}>Get Your Market Oriented Skills <span style={{ color: 'var(--color-secondary)'}}>With Us</span></h2>
                                <Link href="/course">
                                    <a className="edu-btn btn-secondary">Get started now <i className="icon-4"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdBanner;