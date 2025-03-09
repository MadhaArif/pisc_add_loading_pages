import React, { useState, useEffect } from 'react';

const FooterSocial = () => {
    const [social, setSocial] = useState({
        facebook: null,
        twitter: null,
        linked_in: null,
        youtube: null,
        instagram: null,
    });
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "social-icon";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values.shift();
                const [facebook, twitter, linked_in, youtube, instagram] = result?.values[0];
                setSocial({
                    facebook, twitter, instagram, linked_in, youtube
                });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

   const {facebook, youtube, instagram, linked_in, twitter} = social

    const social_share = [
        { link: facebook, target: '_blank', icon: 'icon-facebook', color: 'color-fb' },
        { link: twitter, target: '_blank', icon: 'icon-twitter', color: 'color-twitter' },
        { link: linked_in, target: '_blank', icon: 'icon-linkedin2', color: 'color-linkd' },
        { link: youtube, target: '_blank', icon: 'icon-youtube', color: 'color-yt' },
        { link: instagram, target: '_blank', icon: 'icon-instagram', color: 'color-ig' },
    ]

    return (
        <>
            {social_share.map((social, i) => (
                social.link && (
                    <li key={i}>
                        <a
                            href={social.link}
                            target={social.target ? social.target : ''}
                            className={social.color}
                        >
                            <i className={social.icon}></i>
                        </a>
                    </li>
                )
            ))}
        </>
    )
}

export default FooterSocial;