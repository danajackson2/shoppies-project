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

    const removeFromNoms = (e, movie) => {
        e.stopPropagation()
        const newNoms = nominations.filter(m => m.imdbID !== movie.imdbID)
        setNominations(newNoms)
    }

    return (
        <div id='main-div'>
            <Search addToNoms={addToNoms} nominations={nominations}/>
            <NomList list={nominations} nomsFull={nominations.length === 5} removeFromNoms={removeFromNoms}/>
        </div>
    )
}

export default Main