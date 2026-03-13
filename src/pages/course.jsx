import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CourseStyleTwoMain from '../components/course-style-2';

const CourseStyleTwo = () => {
    return (
        <Wrapper>
            <SEO 
                pageTitle="Our IT Courses" 
                pageDescription="Browse all IT courses at PISC Lahore — web development, graphic design, digital marketing and more. Enroll today!" 
                pageUrl="/course" 
            />
            <CourseStyleTwoMain />
        </Wrapper>
    )
}

export default CourseStyleTwo;