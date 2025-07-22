import SEO from '../components/seo';
import { Wrapper } from '../layout';
import QueryMain from '../components/queries';

export default function Faq() {
    return (
        <Wrapper>
            <SEO pageTitle={'Client queries'} />
            <QueryMain />
        </Wrapper>
    )
}
