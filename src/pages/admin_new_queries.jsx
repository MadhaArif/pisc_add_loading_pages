import SEO from '../components/seo';
import { Wrapper } from '../layout';
import QueryMain from '../components/queries';

export default function Faq() {
    return (
        <Wrapper>
            <SEO pageTitle="Admin - Client Queries" />
            <QueryMain />
        </Wrapper>
    )
}
