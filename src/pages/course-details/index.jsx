import React from 'react';
import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import CourseDetailsMain from '../../components/course-details';

const CourseDetails = () => {
    const router = useRouter();
    const course = router.query;

    return (
        <Wrapper>
            <SEO pageTitle={'Course Details'} />
            <CourseDetailsMain course={course} />
        </Wrapper>
    )
}

export default CourseDetails;