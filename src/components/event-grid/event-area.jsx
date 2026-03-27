import React, { useState, useEffect } from 'react';
import AllEvents from './all-events';

const EventArea = () => {
    const [filterData, setData] = useState([]);
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
    const RANGE = "events";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                setData(result.values);

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="edu-event-area event-area-1 section-gap-equal">
            <div className="container">
                <div data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="row g-5">
                        <AllEvents items={filterData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventArea;