import React, { useEffect } from 'react';
import CourseDetailsSidebar from '../common/sidebar/course-details-sidebar';
import { useRouter } from 'next/router';

const CourseDetailsArea = ({ course }) => {
    const { course_desc, course_desc_2, learn_list, course_desc_3 } = course || {};
    const { push } = useRouter();

    useEffect(()=> {
        if (!course?.learn_list) {
            push('/course')            
        }
    }, [])

    return (
        <section className="edu-section-gap course-details-area">
            <div className="container">
                <div className="row row--30">
                    <div style={{marginBottom: '70px'}}>
                        <img src="/assets/images/event/event-21.jpg" alt="Event" />
                    </div>

                    <div className="col-lg-8">
                        <div className="course-details-content">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div className="course-overview">
                                        <h3 className="heading-title">Course Description</h3>
                                        <p>{course_desc}</p>
                                        <p className="mb--60">{course_desc_2}</p>
                                        <h5 className="title">What You'll Learn?</h5>
                                        <ul className="mb--60">
                                            {learn_list && JSON.parse(learn_list?.replace(/'/g, '"'))?.map((l, i) => <li key={i}>{l}</li>)}
                                        </ul>
                                        <p>{course_desc_3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <CourseDetailsSidebar course={course} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsArea;