import image from "./mysurf.jpeg";

const Gallery = () => {
   

    return (
        <div className="gallery">
            <img src={image} alt="Honolua Bay" />
            <h2 className="title">Honolua Bay</h2>
        </div>
    );
}
 
export default Gallery;
