import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  const [slider, setSlider] = useState([]);
  const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
  const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
  const RANGE = "slider";

  // Fallback slides in case Google Sheets fetch fails
  const fallbackSlider = [
    ["1", "slider1234.png", "World Class IT Training", "Pakistan No.1 IT Skills College", "Expert-led courses in Web Dev, AI, Graphic Design & IELTS Preparation.", "Find Courses"],
    ["2", "slider2.png", "Join Our Community", "Professional IT Training & IELTS Preparation", "Practical & Hands-On Training. 10,000+ Students Trained Successfully.", "Learn More"]
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const result = await response.json();
        if (result?.values && result.values.length > 1) {
          const data = [...result.values];
          data.shift(); // Remove header row
          setSlider(data);
        } else {
          // If no data or empty values, use fallback
          setSlider(fallbackSlider);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setSlider(fallbackSlider);
      }
    };
    fetchData();
  }, []);

  // Show nothing until we have some data (either from API or fallback)
  if (slider.length === 0) {
    return (
      <div style={{ height: "90vh", width: "100%", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h3 style={{ color: "#fff" }}>Loading Slider...</h3>
      </div>
    );
  }

  return (
    <div className="hero-banner hero-style-3 bg-image" style={{ position: "relative", overflow: "hidden", minHeight: "85vh", zIndex: 1 }}>
      <style jsx global>{`
        .hero-banner .university-activator {
          height: 90vh;
          width: 100%;
        }
        .hero-banner .swiper-slide {
          position: relative;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        .hero-banner .swiper-slide-active .image-container {
          animation: kenburns 20s infinite alternate;
        }
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .hero-banner .thumbnail-bg-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          padding-top: 360px; /* Final vertical position fix */
          z-index: 5;
          background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
        }
        .hero-banner .banner-content {
          color: #fff;
          max-width: 800px;
          padding: 0 15px;
        }
        .hero-banner .banner-content .subtitle {
          color: #1ab69d;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 15px;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 3px;
          position: relative;
          padding-left: 65px;
        }
        .hero-banner .banner-content .subtitle::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 50px;
          height: 2px;
          background: #1ab69d;
          transform: translateY(-50%);
        }
        .hero-banner .banner-content .title {
          font-size: 48px;
          line-height: 1.2;
          margin-bottom: 25px;
          color: #ffffff;
          font-weight: 800;
          text-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }
        .hero-banner .banner-content p {
          font-size: 19px;
          line-height: 1.7;
          margin-bottom: 45px;
          color: rgba(255,255,255,0.9);
          max-width: 600px;
          font-weight: 400;
        }
        .hero-banner .edu-btn {
          padding: 18px 40px;
          font-size: 17px;
          font-weight: 600;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(26, 182, 157, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-banner .edu-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(26, 182, 157, 0.4);
          color: #fff;
        }
        
        .hero-banner .slide-prev, .hero-banner .slide-next {
          width: 55px;
          height: 55px;
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: #fff;
          transition: all 0.3s ease;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          cursor: pointer;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
        .hero-banner .slide-prev:hover, .hero-banner .slide-next:hover {
          background: #1ab69d !important;
          border-color: #1ab69d !important;
          transform: translateY(-50%) scale(1.1);
        }
        .hero-banner .slide-prev { left: 20px; }
        .hero-banner .slide-next { right: 20px; }
        
        @media only screen and (max-width: 1199px) {
          .hero-banner .banner-content .title { font-size: 55px; }
          .hero-banner .university-activator { height: 80vh; }
        }
        @media only screen and (max-width: 991px) {
          .hero-banner .banner-content .title { font-size: 45px; }
          .hero-banner .banner-content p { font-size: 17px; }
        }
        @media only screen and (max-width: 767px) {
          .hero-banner .banner-content .title { font-size: 36px; }
          .hero-banner .university-activator { height: 70vh; }
          .hero-banner .thumbnail-bg-content { background: rgba(0,0,0,0.7); }
          .hero-banner .slide-prev, .hero-banner .slide-next { display: none !important; }
        }
      `}</style>

      {/* Custom Navigation Buttons */}
      <button className="slide-prev" aria-label="Previous Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button className="slide-next" aria-label="Next Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        {slider.map((item, ind) => {
          const [id, src, subtitle, title, sm_text, btn_text] = item;
          const img = `/assets/images/course/${src}`;

          return (
            <SwiperSlide key={ind}>
              <div className="image-container" style={{ position: "relative", height: "100%", width: "100%", background: "#000" }}>
                <Image
                  src={img}
                  alt={title || "Hero Slider Image"}
                  layout="fill"
                  objectFit="cover"
                  priority={ind === 0}
                  loading={ind === 0 ? "eager" : "lazy"}
                  style={{ filter: "brightness(0.8) contrast(1.1)" }}
                />
              </div>
              <div className="thumbnail-bg-content">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-8">
                      <div className="banner-content">
                        <span className="subtitle animated fadeInDown">
                          {subtitle}
                        </span>
                        <h1 className="title animated fadeInUp">
                          {title}
                        </h1>
                        <p className="animated fadeInUp">
                          {sm_text}
                        </p>
                        <div className="banner-btn animated fadeInUp">
                          <Link href="/course">
                            <a className="edu-btn btn-secondary">
                              {btn_text || "Get Started"} <i className="icon-4"></i>
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
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
