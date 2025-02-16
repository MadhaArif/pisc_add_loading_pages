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
            }) : <img style={{ width: '200px', margin: '0 auto' }} src='/assets/images/loader.gif' />}
        </>
    )
}

export default AllEvents;