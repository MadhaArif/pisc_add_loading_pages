import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

SwiperCore.use([Autoplay, EffectFade, Navigation]);

const HeroSlider = () => {
  const [slider, setSlider] = useState([]);
  const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
  const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
  const RANGE = "slider";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const result = await response.json();
        if (result?.values) {
          const data = result.values;
          data.shift(); // Remove header row
          setSlider(data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hero-banner hero-style-3 bg-image" style={{ position: "relative", overflow: "hidden", minHeight: "80vh" }}>
      <style jsx global>{`
        .hero-banner .university-activator {
          height: 90vh;
        }
        .hero-banner .swiper-slide {
          position: relative;
          height: 100%;
        }
        .hero-banner .thumbnail-bg-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          z-index: 2;
          background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
        }
        .hero-banner .banner-content {
          color: #fff;
          max-width: 650px;
        }
        .hero-banner .banner-content .subtitle {
          color: #1ab69d;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          display: block;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .hero-banner .banner-content .title {
          font-size: 70px;
          line-height: 1.1;
          margin-bottom: 25px;
          color: #fff;
        }
        .hero-banner .banner-content p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
          color: rgba(255,255,255,0.8);
        }
        .hero-banner .slide-prev, .hero-banner .slide-next {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.1) !important;
          border: 1px solid rgba(255,255,255,0.2) !important;
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: #fff;
          transition: all 0.3s ease;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-banner .slide-prev:hover, .hero-banner .slide-next:hover {
          background: #1ab69d !important;
          border-color: #1ab69d !important;
          transform: translateY(-50%) scale(1.1);
        }
        .hero-banner .slide-prev { left: 40px; }
        .hero-banner .slide-next { right: 40px; }
        
        @media only screen and (max-width: 991px) {
          .hero-banner .banner-content .title { font-size: 50px; }
          .hero-banner .slide-prev { left: 20px; }
          .hero-banner .slide-next { right: 20px; }
        }
        @media only screen and (max-width: 767px) {
          .hero-banner .banner-content .title { font-size: 36px; }
          .hero-banner .thumbnail-bg-content { background: rgba(0,0,0,0.5); }
          .hero-banner .slide-prev, .hero-banner .slide-next { display: none; }
        }
      `}</style>

      {/* Custom Navigation Buttons */}
      <button className="slide-prev" aria-label="Previous Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button className="slide-next" aria-label="Next Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <Swiper
        key={slider.length}
        slidesPerView={1}
        spaceBetween={0}
        loop={slider.length > 1}
        grabCursor={true}
        observer={true}
        observeParents={true}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".slide-next",
          prevEl: ".slide-prev",
        }}
        className="swiper university-activator"
      >
        {slider.length > 0 ? (
          slider.map((item, ind) => {
            const [id, src, subtitle, title, sm_text, btn_text] = item;
            const img = `/assets/images/course/${src}`;

            return (
              <SwiperSlide key={ind}>
                <div style={{ position: "relative", height: "100%", width: "100%" }}>
                  <Image
                    src={img}
                    alt={title || "Hero Slider Image"}
                    layout="fill"
                    objectFit="cover"
                    priority={ind === 0}
                  />
                </div>
                <div className="thumbnail-bg-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="banner-content">
                          <span className="subtitle" data-sal="slide-up" data-sal-duration="800">
                            {subtitle}
                          </span>
                          <h1
                            className="title"
                            data-sal-delay="100"
                            data-sal="slide-up"
                            data-sal-duration="800"
                          >
                            {title}
                          </h1>
                          <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                            {sm_text}
                          </p>
                          <div className="banner-btn" data-sal-delay="400" data-sal-duration="800">
                            <Link href="/course">
                              <a className="edu-btn btn-secondary">
                                {btn_text} <i className="icon-4"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide>
            <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f2f5" }}>
              <div className="text-center">
                <h3>Loading Slider...</h3>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default HeroSlider;