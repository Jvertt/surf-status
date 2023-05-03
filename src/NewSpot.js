import React from "react"

const NewSpot = () => {
    return(
        <div className="new-spot"> 
        <h2> Add a new spot!</h2>
        <form> 
            <label> Surf Spot </label>
            <input
            type="text"
            required
            />
            <label> Surf body</label>
            <textarea
            required></textarea>
            <label> Location </label>
            <select>
                <option value= 'maui'> maui </option>
                <option value= 'hawaii'> maui </option>
            </select>
            <button> add spot</button>
        </form>
        </div>
    )
}


export default NewSpot;