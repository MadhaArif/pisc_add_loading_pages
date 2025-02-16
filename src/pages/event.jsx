import SEO from '../components/seo';
import { Wrapper } from '../layout';
import EventListMain from '../components/event-grid';

const EventList = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Upcoming Events'} />
            <EventListMain />
        </Wrapper>
    )
}

export default EventList;