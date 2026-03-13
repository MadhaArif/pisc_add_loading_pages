import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AboutOneMain from '../components/abouts/about-1';

const AboutOne = () => {
    return (
        <Wrapper>
            <SEO 
                pageTitle="About Us" 
                pageDescription="Learn about Professional IT Skills College (PISC) in Shadbagh Lahore — our mission, vision and expert instructors." 
                pageUrl="/about" 
            />
            <AboutOneMain />
        </Wrapper>
    )
}

export default AboutOne;