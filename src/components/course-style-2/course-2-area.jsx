import { useState, useEffect } from 'react';
import CourseTypeSix from '../course/course-type-six';

const CourseTwoArea = () => {
    const [courses, setCourses] = useState([]);            // Original data
    const [filteredCourses, setFilteredCourses] = useState([]); // Filtered data
    const [displayedCoursesCount, setDisplayedCoursesCount] = useState(6); // Track number of courses to display
    const [searchTerm, setSearchTerm] = useState('');
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
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
                    setFilteredCourses(actualCourses.slice(0, 6)); // Display first 6 courses initially
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
            setFilteredCourses(courses.slice(0, displayedCoursesCount));
        } else {
            const filtered = courses.filter(course =>
                course[1]?.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCourses(filtered.slice(0, displayedCoursesCount));
        }
    };

    const handleReset = () => {
        setSearchTerm('');
        setDisplayedCoursesCount(6); // Reset to show only first 6 courses
        setFilteredCourses(courses.slice(0, 6));
    };

    const handleShowMore = () => {
        const newDisplayCount = displayedCoursesCount + 6;
        setDisplayedCoursesCount(newDisplayCount);

        // Update filtered courses based on current search term
        if (searchTerm.trim() === '') {
            setFilteredCourses(courses.slice(0, newDisplayCount));
        } else {
            const filtered = courses.filter(course =>
                course[1]?.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCourses(filtered.slice(0, newDisplayCount));
        }
    };

    return (
        <div className="edu-course-area course-area-1 gap-tb-text">
            <div className="container">
                <div className="row mb-5 justify-content-end">
                    <div className="col-md-4">
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search courses by name..."
                                className="form-control"
                                value={searchTerm}
                                onChange={handleSearch}
                                style={{
                                    background: 'var(--color-smoke)',
                                    padding: '10px 40px 10px 20px',
                                    height: 'auto',
                                    outline: 'none'
                                }}
                            />
                            <i
                                className="bi bi-search"
                                style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: '50%',
                                    right: '15px',
                                    transform: 'translateY(-50%)',
                                    color: '#888',
                                    pointerEvents: 'none',
                                    fontSize: '16px',
                                    cursor: 'pointer'
                                }}
                            ></i>
                        </div>
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

                {/* Show More Button */}
                {filteredCourses.length > 0 && (
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {(searchTerm.trim() === ''
                                ? courses.length > filteredCourses.length
                                : courses.filter(course => course[1]?.toLowerCase().includes(searchTerm.toLowerCase())).length > filteredCourses.length
                            ) && (
                                <button
                                    style={{
                                        background: 'var(--color-primary)',
                                        color: 'white',
                                        fontWeight: '500',
                                        padding: '12px 30px',
                                        borderRadius: '5px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        marginTop: '30px'
                                    }}
                                    onClick={handleShowMore}
                                >
                                    Show More
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseTwoArea;
