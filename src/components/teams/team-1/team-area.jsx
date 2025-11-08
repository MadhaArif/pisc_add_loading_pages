import React, { useState, useEffect } from 'react';
import TeamTwo from "../../../components/team-member/team-two";

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
                setData(result?.values?.splice(0, 3));
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

                <div className="row g-5">
                    {data.length && data.map((instructor, ind) => {
                        const [img, name, destination] = instructor;
                        const imgSrc = `/assets/images/course/${img}`;

                        return (
                            <div key={ind} className="col-lg-3 col-md-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-team-grid team-style-2">
                                    <div className="inner">
                                        <div className="thumbnail-wrap">
                                            <div className="thumbnail">
                                                <a>
                                                    <img src={imgSrc} alt="team images" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="content">
                                            <h5 className="title">
                                                <a>{name || 'name'}</a>
                                            </h5>
                                            <span className="designation">{destination || 'destination'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamArea;