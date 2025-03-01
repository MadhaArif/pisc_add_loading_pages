import React from 'react';
import { Books } from '../../../svg';

const CourseDetailsSidebar = ({ course }) => {
    const { img, certificate, instructor, duration, language, timing, form_link, lesson } = course || {};

    return (
        <>
            <div className={`course-sidebar-3`}>
                <div className="edu-course-widget widget-course-summery">
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

                                {language && <li>
                                    <span className="label"><i className="icon-59"></i>Language:</span>
                                    <span className="value">{language}</span>
                                </li>}

                                {timing && <li>
                                    <span className="label"><i className="icon-61"></i>Class Time:</span>
                                    <span className="value">{timing}</span>
                                </li>}

                                {certificate && <li>
                                    <span className="label"><i className="icon-64"></i>Certificate:</span>
                                    <span className="value">{certificate}</span>
                                </li>}
                            </ul>

                            <div className="read-more-btn">
                                <a href={form_link} target='_blank' className="edu-btn">Enroll Now <i className="icon-4"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetailsSidebar;