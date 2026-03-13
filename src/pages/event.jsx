import SEO from '../components/seo';
import { Wrapper } from '../layout';
import EventListMain from '../components/event-grid';

const EventList = () => {
    return (
        <Wrapper>
            <SEO 
                pageTitle="Upcoming Events" 
                pageDescription="Stay updated with the latest events, workshops, and seminars at Professional IT Skills College (PISC) Lahore." 
                pageUrl="/event" 
            />
            <EventListMain />
        </Wrapper>
    )
}

export default EventList;