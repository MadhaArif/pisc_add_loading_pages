import { Footer, HeaderTwo } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb-3';
import Testimonial from '../../homes/home-university/testimonial-area';
import AboutArea from './about-area';
import BrandArea from './brand-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar={true} />
                <Breadcrumb title="About us" subtitle="Course Style 2" />
                <AboutArea/>
                <Testimonial/>
                <BrandArea />
                <Footer />
            </div>
        </div>
    )
}

export default index;