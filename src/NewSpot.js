import { useState } from "react";
import { useHistory } from "react-router-dom";


const NewSpot = ({handleAdd}) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('')
    const [body, setBody] = useState('');
    const [location, setLocation] = useState('');
    const [isPending, setisPending] = useState(false);
    const redirect = useHistory()

    const handleSubmit = (e) => {
        const spot = {title, image, body,location};
        e.preventDefault()
        setisPending(true)
        fetch('http://localhost:3000/spots', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(spot)
        })
        .then((r) => r.json())
        .then(newObj => handleAdd(newObj))
        redirect.push('/')
    }

    return(
        <div className="new-spot"> 
        <h2> Add a new spot!</h2>
        <form onSubmit={handleSubmit}> 
            <label> Surf Spot </label>
            <input
            type="text"
            required
            value={title}
            onChange={ (e) => setTitle(e.target.value)}
            />
            <label> Image </label>
            <textarea
            required
            value ={image}
            onChange={ (e) => setImage(e.target.value)}
            ></textarea>
            <label> Surf body</label>
            <textarea
            required
            value ={body}
            onChange={ (e) => setBody(e.target.value)}
            ></textarea>
            <label> Location </label>
            <textarea
            required
            value ={location}
            onChange={ (e) => setLocation(e.target.value)}
            ></textarea>
            { !isPending && <button> add spot</button>}
            { isPending && <button> adding spot...</button>}
        </form>
        </div>
    )
}


export default NewSpot;