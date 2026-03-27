import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CourseTypeSix from '../../course/course-type-six';

const CoursesArea = () => {
    const [courses, setCourses] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "courses";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values?.shift()
                setCourses(result?.values?.splice(0, 3));
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="edu-course-area course-area-3 section-gap-large ">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Popular Courses</span>
                    <h2 className="title sub-heading">Our Top Courses</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="isotope-wrapper">
                    <div className="row g-5" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                        {courses && courses.length > 0 ? (
                            courses.map((course) => {
                                return (
                                    <div key={course[0]} className="col-md-6 col-lg-4">
                                        <CourseTypeSix course={course} />
                                    </div>
                                )
                            })
                        ) : (
                            // Fallback content when no courses data
                            <>
                                <style jsx>{`
                                    .course-card-placeholder {
                                        background: #f8f9fa;
                                        padding: 30px;
                                        border-radius: 10px;
                                        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                                        min-height: 300px;
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: center;
                                        align-items: center;
                                        text-align: center;
                                    }
                                    .course-card-placeholder h4 {
                                        color: var(--color-heading);
                                        margin-bottom: 15px;
                                        font-size: 22px;
                                    }
                                    .course-card-placeholder p {
                                        color: var(--color-body);
                                        line-height: 1.6;
                                    }
                                `}</style>
                                <div className="col-md-6 col-lg-4">
                                    <div className="course-card-placeholder">
                                        <h4>Web Development</h4>
                                        <p>Learn modern web technologies and frameworks</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="course-card-placeholder">
                                        <h4>Mobile App Development</h4>
                                        <p>Build iOS and Android applications</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="course-card-placeholder">
                                        <h4>Data Science</h4>
                                        <p>Master data analysis and machine learning</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className='text-center mt-5' data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <Link href="/course">
                        <a className="edu-btn btn-secondary">View all<i className="icon-4"></i>
                        </a>
                    </Link>
                </div>
            </div>

            <ul className="shape-group">
                <li className="shape-1">
                    <Image width={500} height={500} className="d-block-shape-light" src="/assets/images/others/map-shape-3.png" alt="Map Shape Light" />
                    <Image width={500} height={500} className="d-none-shape-dark" src="/assets/images/others/3-Home-1.png" alt="Home Shape Dark" />
                </li>
                <li className="shape-2">
                    <Image width={500} height={500} className="d-block-shape-light" src="/assets/images/others/map-shape-3.png" alt="Map Shape Light" />
                    <Image width={500} height={500} className="d-none-shape-dark" src="/assets/images/others/dark-map-shape-3.png" alt="Map Shape Dark" />
                </li>
            </ul>
        </div>
    )
}

export default CoursesArea;