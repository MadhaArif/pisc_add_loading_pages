import { useEffect, useState } from "react";
import HomeUniversity from '../components/homes/home-university';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

export default function Home() {
    const [data, setData] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "other";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values?.shift()
                setData(result?.values?.splice(0, 3));
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Only run on client-side
        import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ Modal }) => {
            const modalElement = document.getElementById('exampleModal');
            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.show();
            }
        });
    }, []);

    return (
        <>
            <Wrapper>
                <div style={{ margin: '100px 0 0' }} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: 'absolute', right: '-50px', color: 'var(--color-secondary) !important' }}></button>

                            <div class="modal-body">
                                <img style={{ width: '100%' }} src={ data.length && `/assets/images/course/${data[0][0]}`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <SEO pageTitle={'Home'} />
                <HomeUniversity />
            </Wrapper>
        </>
    )
}