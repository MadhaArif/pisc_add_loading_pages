import React from 'react';
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const ImageLightBox = ({ images, open, setOpen, photoIndex, setPhotoIndex }) => {
    const img  = images.map(item => ({src: item}))
    return (
        <>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={img}
                index={photoIndex}
                controller={{ closeOnBackdropClick: true }}
                on={{ view: ({ index }) => setPhotoIndex(index) }}
            />
        </>
    )
}

export default ImageLightBox;