import { useState } from "react";
import { useHistory } from "react-router-dom";


const NewSpot = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [location, setLocation] = useState('Maui');
    const [isPending, setisPending] = useState(false);
    const redirect = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const spot = {title, body,location};

        setisPending(true)

        fetch('http://localhost:3000/spots', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(spot)
        }).then(() => {
            console.log('new spot')
            setisPending(false);
            redirect.push('/')
        })
        
      
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
            <label> Surf body</label>
            <textarea
            required
            value ={body}
            onChange={ (e) => setBody(e.target.value)}
            ></textarea>
            <label> Location </label>
            <select>
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                <option value= 'Maui'> maui </option>
                <option value= 'Oahu'> Oahu </option>
                <option value= 'Kauai'> Kauai </option>
                <option value= 'Hawaii'> Hawaii </option>
                <option value= 'niihau'> niihau </option>
                <option value= 'kahoolawe'> kahoolawe </option>
                <option value= 'molokai'> molokai' </option>
                <option value= 'Lanai'> Lanai </option>
            </select>
            { !isPending && <button> add spot</button>}
            { isPending && <button> adding spot...</button>}
        </form>
        </div>
    )
}


export default NewSpot;