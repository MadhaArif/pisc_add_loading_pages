import React, { useState, useEffect } from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const TeamArea = () => {
    const [data, setData] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "instructors";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values?.shift()
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
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Instructors</span>
                    <h2 className="title">Meet With Experts</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="row g-5" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        loop={true}
                        className="home-one-testimonial-activator swiper"
                        modules={[Autoplay]}
                        pagination={false}
                        grabCursor={true}
                        speed={1500}
                        autoplay={{ delay: 3500 }}
                        breakpoints={{
                            577: { slidesPerView: 2 }
                        }}
                    >
                        {data.length && data.map((instructor, ind) => {
                            const [img, name, destination] = instructor;
                            const imgSrc = `/assets/images/course/${img}`;

                            return (
                                <SwiperSlide key={ind}>
                                    <div className="edu-team-grid team-style-2">
                                        <div className="inner">
                                            <div className="thumbnail-wrap">
                                                <div className="thumbnail">
                                                    <a><img src={imgSrc} alt="team" /></a>
                                                </div>
                                            </div>

                                            <div className="content">
                                                <h5 className="title"><a>{name}</a></h5>
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
    )
}

export default TeamArea;