import React from 'react';
import { Books } from '../../../svg';

const CourseDetailsSidebar = ({ course }) => {
    const { img, certificate, instructor, duration, language, timing, form_link, lesson } = course || {};

    return (
        <>
            <div className={`course-sidebar-3`} >
                <div className="edu-course-widget widget-course-summery" style={{ border: '10px solid #F8B81F', background: 'rgb(205, 209, 228, .2)' }}>
                    <div className="inner">
                        <div className="content">
                            <h4 className="widget-title">Course Includes:</h4>
                            <ul className="course-item">
                                {instructor && <li>
                                    <span className="label"><i className="icon-62"></i>Instrutor:</span>
                                    <span className="value">{instructor}</span>
                                </li>}

                                {duration && <li>
                                    <span className="label"><i className="icon-61"></i>Duration:</span>
                                    <span className="value">{duration}</span>
                                </li>}

                                {lesson && <li>
                                    <span className="label">
                                        <Books />
                                        Lessons:</span>
                                    <span className="value">{lesson}</span>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetailsSidebar;