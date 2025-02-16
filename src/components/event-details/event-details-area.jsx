import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const EventDetailsArea = ({ event }) => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '923166474545';
        const message = `I am interested to join ${event?.title} event. Which will be held on ${event?.date} at ${event?.event_meta}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const { push } = useRouter();
    
        useEffect(()=> {
            if (!event) {
                push('/event')            
            }
        }, [])

    return (
        <section className="event-details-area edu-section-gap">
            <div className="container">
                <div className="event-details">
                    <div className="main-thumbnail">
                        <img src={`/assets/images/event/${event?.img}`} alt="Event" />
                    </div>
                    <div className="row row--30">
                        <div className="col-lg-12">
                            <div className="details-content">
                                <h3>About The Event</h3>
                                <p>{event?.sm_desc}</p>
                                <p>{event?.sm_desc_2}</p>

                                <ul>
                                    {event?.bullets && JSON.parse(event?.bullets?.replace(/'/g, '"'))?.length && JSON.parse(event?.bullets.replace(/'/g, '"'))?.map(bullet => <li>{bullet}</li>)}
                                </ul>

                                {/* it will be static */}
                                <h3>Event Location</h3>
                                <ul className="event-meta">
                                    <li><i className="icon-40"></i>Shad Bagh, Lahore 54000</li>
                                    <li><i className="icon-71"></i>+92-316-6474545</li>
                                </ul>
                                <div className="gmap_canvas">
                                    <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.1850377161236!2d74.33592427507266!3d31.601389143135737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64d5fee12350f50d%3A0x614779dd4bb7947c!2sProfessional%20IT%20Skills%20College!5e0!3m2!1sen!2s!4v1739114330166!5m2!1sen!2s" ></iframe>
                                </div>

                                <div className="read-more-btn">
                                    <button onClick={handleWhatsAppClick} className="edu-btn" style={{ width: '100%', marginTop: '40px' }}>Join Now <i className="icon-4"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsArea;