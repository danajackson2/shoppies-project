import React, { useState } from 'react'
import NomList from '../components/NomList'
import Search from '../components/Search'

function Main(){ 

    const [nominations, setNominations] = useState([])

    return (
        <div id='main-div'>
            <Search addToNoms={setNominations}/>
            <NomList list={nominations}/>
        </div>
    )
}

export default Main