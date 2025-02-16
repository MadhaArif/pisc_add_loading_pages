import Link from 'next/link';
import React from 'react';

const EventItem = ({ event }) => {
    const [id, title, category, date, time, bullets, sm_desc, sm_desc_2, event_meta, img] = event || [];
    
    return (
        <Link href={{
            pathname: `/event-details`, query: {
                id, title, category, date, time, bullets, sm_desc, sm_desc_2, event_meta, img
            }
        }}>
            <div className="inner">
                <div className="thumbnail">

                    <a>
                        <img src={`/assets/images/event/${img}`} alt="Blog Images" />
                    </a>
                    <div className="event-time">
                        <span><i className="icon-33"></i>{time}</span>
                    </div>
                </div>
                <div className="content">
                    <div className="event-date">
                        <span className="day">{date?.split(' ')[1]}</span>
                        <span className="month">{date?.split(' ')[0]}</span>
                    </div>
                    <h5 className="title">
                        <a>{title}</a>
                    </h5>
                    <p>{sm_desc}</p>
                    <ul className="event-meta">
                        <li><i className="icon-40"></i>{event_meta}</li>
                    </ul>
                    <div className="read-more-btn">
                        <a className="edu-btn btn-small btn-secondary">
                            Learn More <i className="icon-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventItem;