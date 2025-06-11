import React, { useState, useEffect } from 'react';

const HeaderTopRight = () => {
    const [contact, setContact] = useState({ address: null, phone: null, phone_2: null, email: null, timing: null });
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "contact-info";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result.values.shift();
                const [address, phone, phone_2, email, timing] = result?.values[0]
                setContact({ address, phone, phone_2, email, timing });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const { address, phone, phone_2, email, timing } = contact

    return (

        <section style={{ padding: '10px 0', background: '#183B4E' }}>
            <section className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {timing && <p className='mb-0' style={{ color: '#fff' }}>
                        ⏰ {timing}
                    </p>}
                </div>

                <div style={{display: 'flex'}}>
                    {phone && <p className='mb-0' style={{ color: '#fff' }}>
                        <i className="icon-phone"></i>&nbsp;&nbsp; {phone}
                    </p>}

                    {email && <p className='mb-0 d-none d-lg-block ms-5' style={{ color: '#fff' }}>
                        <i className="icon-envelope"></i>&nbsp;&nbsp; {email}
                    </p>}
                </div>
            </section>
        </section>
    )
}

export default HeaderTopRight;