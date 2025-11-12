import React from 'react';
import { nanoid } from 'nanoid';
import EventItem from './event-item';

const AllEvents = ({ items }) => {
    return (
        <>
            {items?.length > 1 ? items.shift() && items?.map((item) => {
                return (
                    <div key={nanoid()} className="col-lg-4 col-md-6">
                        <div className="edu-event event-style-1">
                            <EventItem event={item} />
                        </div>
                    </div>
                )
            }) : <h3 className="view-text text-center">No Upcomming Event</h3>}
        </>
    )
}

export default AllEvents;