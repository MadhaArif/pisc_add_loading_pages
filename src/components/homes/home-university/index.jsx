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

const HomeUniversityIndex = ({ data = [], hasError = false, errorMessage = null }) => {
  // Use parent data directly, no local state needed
  const displayData = data && data.length > 0 ? data : [];

  // Debug logging
  useEffect(() => {
    console.log("[HomeUniversity] Component mounted");
    console.log("[HomeUniversity] Data prop:", data);
    console.log("[HomeUniversity] Data length:", data?.length);
    console.log("[HomeUniversity] Has error:", hasError);
    console.log("[HomeUniversity] Error message:", errorMessage);
    console.log("[HomeUniversity] Display data length:", displayData.length);
    if (displayData.length > 0) {
      console.log("[HomeUniversity] First row:", displayData[0]);
    }
  }, [data, hasError, errorMessage, displayData.length]);

  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <HeaderTwo no_topBar />
        <HeroSlider />
        <CategoryArea />
        
        {/* Show error message if data failed to load */}
        {hasError && (
          <div style={{ 
            padding: '20px', 
            background: '#fff3cd', 
            borderBottom: '1px solid #ffeeba',
            textAlign: 'center',
            margin: '20px auto',
            maxWidth: '800px',
            borderRadius: '8px'
          }}>
            <h4 style={{ color: '#856404', marginBottom: '10px' }}>Unable to load some content</h4>
            <p style={{ color: '#856404', marginBottom: '0' }}>Please check your connection or try refreshing the page.</p>
            {errorMessage && <small style={{ color: '#856404' }}>Error: {errorMessage}</small>}
          </div>
        )}
        
        <AboutArea img={displayData.length > 0 ? displayData[0][4] : null} img2={displayData.length > 0 ? displayData[0][5] : null} />
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
