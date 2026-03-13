import SEO from '../components/seo';
import { Wrapper } from '../layout';
import GalleryGridMain from '../components/gallery-grid';

export default function GalleryGrid() {
    return (
        <Wrapper>
            <SEO 
                pageTitle="Gallery" 
                pageDescription="Explore the campus life, events, and activities at Professional IT Skills College (PISC) Lahore." 
                pageUrl="/gallery" 
            />
            <GalleryGridMain />
        </Wrapper>
    )
}
