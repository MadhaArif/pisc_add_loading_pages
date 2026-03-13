import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ContactUsMain from '../components/contact-us';

const ContactUs = () => {
    return (
        <Wrapper>
            <SEO 
                pageTitle="Contact Us" 
                pageDescription="Get in touch with PISC Lahore for admissions, course details, and inquiries about our IT training programs." 
                pageUrl="/contact-us" 
            />
            <ContactUsMain />
        </Wrapper>
    )
}

export default ContactUs;