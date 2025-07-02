import { useEffect } from "react";
import HomeUniversity from '../components/homes/home-university';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

export default function Home() {
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
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

                <div style={{margin: '100px 0 0'}} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" style={{ position: 'absolute', right: '0' }} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                            <div class="modal-body">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57yWF0rardMppBwn0mWOJyjiaiElkflKFAA&s" alt="" />
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