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
            <SEO 
                pageTitle={course?.title ? `${course.title} Course` : "Course Details"} 
                pageDescription={course?.short_desc || "Explore detailed information about our IT courses at PISC Lahore. Join our hands-on training programs."}
                pageUrl={`/course-details/${course?.id || ""}`}
            />
            <CourseDetailsMain course={course} />
        </Wrapper>
    )
}

export default CourseDetails;