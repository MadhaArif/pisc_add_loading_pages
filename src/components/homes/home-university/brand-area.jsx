import React, { useEffect, useState } from 'react';

const BrandArea = () => {
    const [data, setData] = useState({
        pre_title: 'Our Partners',
        title: 'Learn with Our Partners',
        text: 'We believe in the power of collaboration. Our partnerships with industry leaders, tech companies, and educational institutions allow us to offer cutting-edge training and real-world insights.',
        brands: []
    });

    const { pre_title, title, text, brands } = data;

    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "partner";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values?.shift()
                setData({
                    ...data,
                    brands: [...result?.values?.splice(0, 3)]
                    });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="edu-brand-area brand-area-1 gap-top-equal gap-bottom-equal">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="brand-section-heading">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">{pre_title}</span>
                                <h2 className="title" style={{ fontSize: '45px' }}>{title}</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="d-flex gap-4">
                            {brands.map((b, i) => (
                                <img style={{ width: '130px' }} src={`/assets/images/course/${b}`} alt="Brand Logo" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandArea;