const GalleryCard = ({data}) => {
    return (  
        <div className="gallery-card">
            <img src={data.image} alt={data.title} />
            <br/><br/>
            <label> {data.title}</label>
            {/* <h2> {data.body} </h2> */}
        </div>
    );
}
 
export default GalleryCard;