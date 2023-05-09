import GalleryCard from "./GalleryCard";

const Gallery = ({data}) => {

    // {data.map(spot => console.log(spot))}

    return (
        <div className="gallery">
            {data ? data.map((spot) => { 
                return <GalleryCard key={spot.id} data={spot} />
            }): null}
        </div>
    );
}
 
export default Gallery;
