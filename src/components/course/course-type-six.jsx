import React from 'react';
import Link from 'next/link';

const CourseTypeSix = ({ course, color }) => {
    const [id, title, category, level, course_outline, duration, lesson, img, short_desc, instructor, language, certificate, course_desc, course_desc_2, learn_list, course_desc_3] = course || []

    return (
        <Link href={{
            pathname: `/course-details`, query: {
                id, title, category, level, course_outline, duration, lesson, img, short_desc, instructor, language, certificate, course_desc, course_desc_2, learn_list, course_desc_3
            }
        }}>
            <div className={`edu-course course-style-3`}>
                <div className="inner">
                    <div className="thumbnail">
                        <a>
                            <img src={`/assets/images/course/course-04/${img}`} alt="Course Meta" />
                        </a>

                        <div className="time-top">
                            <span className="duration"><i className="icon-61"></i>{course_outline}</span>
                        </div>
                    </div>

                    <div className="content" style={{ background: color ? '#f7f5f2' : 'white' }}>
                        <span className="course-level">{level}</span>
                        <h5 className="title">
                            <a>{title}</a>
                        </h5>
                        <p>{short_desc}</p>

                        <div className="read-more-btn">
                            <a className="edu-btn btn-small btn-secondary" style={{ cursor: 'pointer' }}>
                                View Detail
                                <i className="icon-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CourseTypeSix;