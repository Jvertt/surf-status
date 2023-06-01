const GalleryCard = ({data}) => {
    return (  
        <div className="gallery-card">
            <img src={data.image} alt={data.title} />
            <br/><br/>
            <label> {data.title}</label>
        </div>
    );
}
 
export default GalleryCard;