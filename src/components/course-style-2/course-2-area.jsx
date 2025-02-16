import { useState, useEffect } from 'react';
import CourseTypeSix from '../course/course-type-six';

const CourseTwoArea = () => {
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
                setCourses(result?.values);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="edu-course-area course-area-1 gap-tb-text">
            <div className="container">
                <div className="row g-5">
                    {courses.length > 1 ? courses.shift() && courses?.map((course) => {
                        return (
                            <div key={course[0]} className="col-md-6 col-lg-4">
                                <CourseTypeSix course={course} color classes="course-box-shadow" />
                            </div>
                        )
                    }) : <img style={{width: '200px', margin: '0 auto'}} src='/assets/images/loader.gif' />}
                </div>
            </div>
        </div>
    )
}

export default CourseTwoArea;