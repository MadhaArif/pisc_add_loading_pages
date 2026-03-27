import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Install Swiper modules
SwiperCore.use([Autoplay]);

const TeamArea = () => {
  const [data, setData] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
  const RANGE = "instructors";

  // get data from google excel sheet
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`,
        );
        const result = await response.json();
        result?.values?.shift();
        setData(result?.values?.splice(0, 20));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="edu-team-area team-area-2 edu-section-gap">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">Instructors</span>
          <h2 className="title">Meet With Experts</h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>

        <div
          className="row g-5"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            grabCursor={true}
            speed={1500}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {data.length &&
              data.map((instructor, ind) => {
                const [img, name, destination] = instructor;
                const imgSrc = `/assets/images/course/${img}`;

                return (
                  <SwiperSlide key={ind}>
                    <div className="edu-team-grid team-style-2">
                      <div className="inner">
                        <div className="thumbnail-wrap">
                          <div className="thumbnail">
                            <img
                              src={imgSrc}
                              alt="team"
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="content">
                          <h5 className="title">{name}</h5>
                          <span className="designation">{destination}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
