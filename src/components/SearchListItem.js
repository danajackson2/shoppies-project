import React from 'react'

function SearchListItem(props){

    const [title, year] = [props.movie.Title, props.movie.Year]

    return (
        <li className="list-group-item justify-search-item">
            <span>{`${title} - ${year}`}</span>
            <button onClick={props.addtoNoms} className="btn btn-secondary">Nominate</button>
        </li>
    )

}

export default SearchListItem