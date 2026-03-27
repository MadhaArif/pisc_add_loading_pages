import React, { useState, useEffect } from 'react';
import { Footer, HeaderTwo } from '../../../layout';
import CounterArea from './counter-area';
import AboutArea from './about-area';
import CategoryArea from './category-area';
import CoursesArea from './courses-area';
import HeroSlider from './hero-slider';
import TestimonialArea from './testimonial-area';
import AdBanner from './ad-banner';
import BrandArea from './brand-area';

const HomeUniversityIndex = ({ data = [] }) => {
  // Use parent data directly, no local state needed
  const displayData = data && data.length > 0 ? data : [];

  // Only fetch if no parent data (client-side only)
  useEffect(() => {
    console.log("[HomeUniversity] Received data from parent:", data);
    console.log("[HomeUniversity] Data length:", data?.length);
    console.log("[HomeUniversity] First row:", data?.[0]);
    
    if (data && data.length > 0) {
      console.log("[HomeUniversity] Using parent data - no fetch needed");
    }
    // No fallback fetch needed - parent always provides data
  }, [data]); // Re-run only when parent data changes

  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <HeaderTwo no_topBar />
        <HeroSlider />
        <CategoryArea />
        {console.log("[Render Debug] displayData:", displayData)}
        {console.log("[Render Debug] AboutArea img:", displayData.length > 0 ? displayData[0][4] : null)}
        {console.log("[Render Debug] AboutArea img2:", displayData.length > 0 ? displayData[0][5] : null)}
        <AboutArea img={displayData.length > 0 ? displayData[0][4] : null} img2={displayData.length > 0 ? displayData[0][5] : null} />
        {console.log("[AboutArea Rendered] Images passed:", {
          img: displayData.length > 0 ? displayData[0][4] : null,
          img2: displayData.length > 0 ? displayData[0][5] : null,
          fullData: displayData
        })}
        <CounterArea home_3={true} />
        <CoursesArea />

        {displayData.length > 0 && displayData[0][3] && <div className='d-none d-md-block'
          style={{
            width: '100%',
            height: '500px',
            backgroundImage: `url(/assets/images/course/${displayData[0][3]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />}

        <TestimonialArea />
        <AdBanner />
        <BrandArea />
        <Footer />
      </div>
    </div>
  );
};

export default HomeUniversityIndex;
