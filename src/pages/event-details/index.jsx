import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import EventDetailsMain from '../../components/event-details';

const EventDetails = () => {
    const router = useRouter();
    const event = router.query;

    return (
        <Wrapper>
            <SEO 
                pageTitle={event?.title || "Event Details"} 
                pageDescription={event?.short_desc || "Learn more about the exciting events and workshops at Professional IT Skills College (PISC) Lahore."}
                pageUrl={`/event-details/${event?.id || ""}`}
            />
            <EventDetailsMain event={event} />
        </Wrapper>
    )
}

export default EventDetails;