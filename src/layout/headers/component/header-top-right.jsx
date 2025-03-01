import Link from 'next/link';
import React from 'react';

const social_share = [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.instagram.com/', target: '_blank', icon: 'icon-instagram' }
]

const HeaderTopRight = () => {
    return (
        <section style={{ background: '#F0F4F5', padding: '10px 0' }}>
            <section className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <span>
                        <a href="#">⏰ 10am - 10pm</a>
                    </span>
                </div>

                <div>

                    <span>
                        <a href="tel:+923166474545"><i className="icon-phone"></i>&nbsp;+92 316 6474545</a>
                    </span>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <span>
                        <a href="mailto:info@professionalitskillscollege.com" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>&nbsp;info@professionalitskillscollege.com</a>
                    </span>
                </div>
            </section>
        </section>
    )
}

export default HeaderTopRight;