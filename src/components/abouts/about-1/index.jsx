import React from 'react';
import { Footer, HeaderTwo } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb-3';
import Testimonial from '../../homes/home-university/testimonial-area';
import Courses from '../../homes/home-university/courses-area';
import AboutArea from './about-area';
import BrandArea from './brand-area';
import CounterArea from './counter-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar={true} />
                <AboutArea/>
                <Testimonial/>
                <BrandArea />
                <Footer />
            </div>
        </div>
    )
}

export default index;