import React from 'react';
import { Footer, HeaderTwo } from '../../../layout';
import CounterArea from './counter-area';
import AboutArea from './about-area';
import CategoryArea from './category-area';
import CoursesArea from './courses-area';
import HeroSlider from './hero-slider';
import TestimonialArea from './testimonial-area';
import AdBanner from './ad-banner';
import BrandArea from './brand-area';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <HeaderTwo no_topBar />
        <HeroSlider />
        <CategoryArea />
        <AboutArea />
        <CounterArea home_3={true} />
        <CoursesArea />

        <div
          style={{
            width: '100%',
            height: '500px',
            backgroundImage: 'url("/assets/images/course/staff.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <TestimonialArea />
        <AdBanner />
        <BrandArea />
        <Footer />
      </div>
    </div>
  );
};

export default index;
