import React from 'react'

function SearchListItem(props){

    const [title, year, id] = [props.movie.Title, props.movie.Year, props.movie.imdbID]

    return (
        <li className="list-group-item justify-list-item" key={id}>
            <span>{`${title} - ${year}`}</span>
            {props.nominated
            ? <button onClick={() => props.addToNoms(props.movie)} className="btn btn-outline-warning btn-sm" disabled>Nominate</button>
            : <button onClick={() => props.addToNoms(props.movie)} className="btn btn-outline-warning btn-sm">Nominate</button>
            } 
        </li>
    )

}

export default SearchListItem