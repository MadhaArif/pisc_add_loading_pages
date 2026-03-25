import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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
        result?.values.shift() && setSlider(result?.values);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hero-banner hero-style-3 bg-image" style={{ position: "relative" }}>
      {/* Custom Navigation Buttons */}
      <button
        className="slide-prev"
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.25)",
          border: "2px solid rgba(255,255,255,0.6)",
          borderRadius: "50%",
          width: "52px",
          height: "52px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
          transition: "background 0.3s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.45)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        className="slide-next"
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.25)",
          border: "2px solid rgba(255,255,255,0.6)",
          borderRadius: "50%",
          width: "52px",
          height: "52px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
          transition: "background 0.3s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.45)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        speed={800}
        autoplay={{
          delay: 3000,           // ✅ 3 seconds
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
              <img
                src={img}
                alt="image"
                style={{ height: "80vh", width: "100%", objectFit: "cover" }}
              />
              <div className="thumbnail-bg-content">
                <div className="container edublink-animated-shape">
                  <div className="row">
                    <div className="col-7">
                      <div className="banner-content">
                        <span className="subtitle" data-sal="slide-up" data-sal-duration="200">
                          {subtitle}
                        </span>
                        <h1
                          style={{ fontWeight: 700}}
                          className="title heading"
                          data-sal-delay="100"
                          data-sal="slide-up"
                          data-sal-duration="200"
                        >
                          {title}
                        </h1>
                        <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="200">
                          {sm_text}
                        </p>
                        <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="200">
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
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;