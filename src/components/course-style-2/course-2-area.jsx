import { useState, useEffect } from 'react';
import CourseTypeSix from '../course/course-type-six';

const CourseTwoArea = () => {
    const [courses, setCourses] = useState([]);            // Original data
    const [filteredCourses, setFilteredCourses] = useState([]); // Filtered data
    const [searchTerm, setSearchTerm] = useState('');
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "courses";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                const data = result?.values || [];

                if (data.length > 1) {
                    const actualCourses = data.slice(1); // remove header
                    setCourses(actualCourses);
                    setFilteredCourses(actualCourses);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setFilteredCourses(courses);
        } else {
            const filtered = courses.filter(course =>
                course[1]?.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCourses(filtered);
        }
    };

    const handleReset = () => {
        setSearchTerm('');
        setFilteredCourses(courses);
    };

    return (
        <div className="edu-course-area course-area-1 gap-tb-text">
            <div className="container">
                {/* Search + Reset */}
                <div className="row mb-5 justify-content-end">
                    <div className="col-md-4">
                        <input
                            style={{
                                background: 'var(--color-smoke)',
                                height: 'auto',
                                padding: '10px 20px',
                                outline: 'none'
                            }}
                            type="text"
                            placeholder="Search courses by name..."
                            className="form-control"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="col-md-2">
                        <button
                            style={{
                                background: 'var(--color-primary)',
                                color: 'white',
                                fontWeight: '500',
                                padding: '10px',
                                borderRadius: '5px',
                                width: '100%'
                            }}
                            onClick={handleReset}
                            disabled={searchTerm === ''}
                        >
                            Reset
                        </button>
                    </div>
                </div>


                <div className="row g-5">
                    {courses.length === 0 ? (
                        <img
                            style={{ width: '200px', margin: '0 auto' }}
                            src="/assets/images/loader.gif"
                            alt="Loading"
                        />
                    ) : filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <CourseTypeSix
                                    course={course}
                                    color
                                    classes="course-box-shadow"
                                />
                            </div>
                        ))
                    ) : (
                        <p>No courses found matching your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseTwoArea;
