import React from 'react';
import { Footer, Header, HeaderTwo } from '../../layout';
import CourseBreadcrumb from '../breadcrumb/breadcrumb-5';
import CourseDetailsArea from './course-details-area';

const index = ({course}) => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar={true} />
                <CourseBreadcrumb course={course} subtitle="Course Details" />
                <CourseDetailsArea course={course} />
                <Footer />
            </div>
        </div>
    )
}

export default index;