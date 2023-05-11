import GalleryCard from "./GalleryCard";

const Gallery = ({data}) => {

    return (
        <div className="gallery">
            {data ? data.map((spot) => { 
                return <GalleryCard key={spot.id} data={spot} />
            }): null}
        </div>
    );
}
 
export default Gallery;
