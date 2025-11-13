import React, { useState, useEffect } from 'react';
import ImageLightBox from '../common/popup-modal/image-lightbox';

const GalleryArea = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState('All');
    const [photoIndex, setPhotoIndex] = useState(null);
    const [open, setOpen] = useState(false);

    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "gallery";

    // Fetch data from Google Sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values?.shift(); // remove headers
                setGalleryItems(result?.values || []);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    // 🔥 When galleryItems load, update filtered items automatically
    useEffect(() => {
        if (galleryItems.length > 0) {
            setItems(galleryItems);
        }
    }, [galleryItems]);

    const uniq_categories = ['All', ...new Set(galleryItems.map(item => item[1]))];
    const images = items.map(item => `/assets/images/course/${item[0]}`);

    const handleCategory = (category) => {
        setCategory(category);
        if (category === 'All') {
            setItems(galleryItems);
        } else {
            setItems(galleryItems.filter(item => item[1] === category));
        }
    };

    const handleImagePopup = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    };

    return (
        <>
            <div className="edu-gallery-area edu-section-gap">
                <div className="container">
                    <div className="isotope-wrapper">
                        <div className="isotop-button isotop-filter">
                            {uniq_categories.map((c, i) => (
                                <button key={i} onClick={() => handleCategory(c)}
                                    className={`${category === c ? 'is-checked' : ''}`}>
                                    <span className="filter-text">{c}</span>
                                </button>
                            ))}
                        </div>

                        <div className="isotope-list gallery-grid-wrap">
                            <div id="animated-thumbnials" className="edublink-react-gallery-grid">
                                <div className="row g-5">
                                    {items.map((item, i) => (
                                        <div key={i} className="col-lg-4 col-md-6" style={{ cursor: 'pointer' }}>
                                            <div onClick={() => handleImagePopup(i)} className="edu-popup-image edu-gallery-grid w-100">
                                                <div className="thumbnail">
                                                    <img className='w-100' src={`/assets/images/course/${item[0]}`} alt="Gallery" />
                                                </div>
                                                <div className="zoom-icon">
                                                    <i className="icon-69"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <ImageLightBox
                images={images}
                open={open}
                setOpen={setOpen}
                photoIndex={photoIndex}
                setPhotoIndex={setPhotoIndex}
            />
        </>
    );
};

export default GalleryArea;
