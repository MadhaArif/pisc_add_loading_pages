import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import EventDetailsMain from '../../components/event-details';

const EventDetails = () => {
    const router = useRouter();
    const event = router.query;

    return (
        <Wrapper>
            <SEO pageTitle={'Event Details'} />
            <EventDetailsMain event={event} />
        </Wrapper>
    )
}

export default EventDetails;