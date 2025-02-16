import HomeUniversity from '../components/homes/home-university';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Home'} />
            <HomeUniversity />
        </Wrapper>
    )
}