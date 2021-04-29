import React, { useState } from 'react'
import NomList from '../components/NomList'
import Search from '../components/Search'

function Main(){ 

    const [nominations, setNominations] = useState([])

    const addToNoms = (movie) => {
        if (nominations.length < 5){
            if (!nominations.map( n => n.imdbID).includes(movie.imdbID)){
                setNominations([...nominations, movie])
            }
        } else {
            alert("You've reached your five nomination limit.")
        }
    }

    const removeFromNoms = (movie) => {
        const newNoms = nominations.filter(m => m.imdbID !== movie.imdbID)
        setNominations(newNoms)
    }

    return (
        <div id='main-div'>
            <Search addToNoms={addToNoms} nominations={nominations}/>
            <NomList list={nominations} removeFromNoms={removeFromNoms}/>
        </div>
    )
}

export default Main