import React from 'react';
import { Footer, HeaderTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseTwoArea from './course-2-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar />
                <BreadcrumbThree title="Digital Skills Program" subtitle="Course Style 2" />
                <CourseTwoArea/>
                <Footer />
            </div>
        </div>
    )
}

export default index;