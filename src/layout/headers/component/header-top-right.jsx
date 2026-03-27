import React, { useState, useEffect } from 'react';

const HeaderTopRight = () => {
    const [contact, setContact] = useState({ address: null, phone: null, phone_2: null, email: null, timing: null });
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
    const RANGE = "contact-info";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                if (result?.values && result.values.length > 0) {
                    result.values.shift();
                    const [address, phone, phone_2, email, timing] = result?.values[0]
                    setContact({ address, phone, phone_2, email, timing });
                }
            } catch (error) {
                console.error("HeaderTopRight - Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const { address, phone, phone_2, email, timing } = contact

    return (

        <section style={{ padding: '10px 0', background: 'var(--color-primary)' }}>
            <section className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {timing && <p className='mb-0' style={{ color: '#fff' }}>
                        ⏰ {timing}
                    </p>}
                </div>

                <div style={{display: 'flex'}}>
                    {phone && <p className='mb-0' style={{ color: '#fff' }}>
                        <i className="icon-phone" style={{ color: 'var(--color-secondary)' }}></i>&nbsp;&nbsp; {phone}
                    </p>}

                    {email && <p className='mb-0 d-none d-lg-block ms-5' style={{ color: '#fff' }}>
                        <i className="icon-envelope" style={{color: 'var(--color-secondary)'}}></i>&nbsp;&nbsp; {email}
                    </p>}
                </div>
            </section>
        </section>
    )
}

export default HeaderTopRight;