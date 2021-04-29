import React, { useState } from 'react'
import SearchListItem from './SearchListItem'

function Search(props){
    
    const [movies, setMovies] = useState([])

    function handleSearch(e){
        fetch(`http://www.omdbapi.com/?apikey=e5e60439&s=${e.target.value}&type=movie`)
        .then(res => res.json())
        .then(data => data.Response === 'False' ? setMovies([]) : setMovies(data.Search))
    }

    function nominated(movie){
        return props.nominations.map(m => m.imdbID).includes(movie.imdbID)
    }

    return (
        <div id ='search-div'>
            <h1>Search</h1>
            <div className="input-group mb-3 search-input">
                <span className="input-group-text" id="basic-addon1">🔎</span>
                <input onChange={handleSearch} type="text" className="form-control" placeholder="Search Movies" aria-label="Search" aria-describedby="basic-addon1"/>
            </div>
            <ul className='list-group'>
                {movies.map(m => <SearchListItem key={m.imdbID} movie={m} nominated={nominated(m)} addToNoms={props.addToNoms}/>)}
            </ul>
        </div>
    )
}

export default Search