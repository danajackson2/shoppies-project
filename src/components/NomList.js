import React, {useState} from 'react'
import Banner from './Banner'
import Info from './Info'

function NomList(props){

    const [infoMovie, setInfoMovie] = useState({})

    function selectMovie(movie){
        setInfoMovie(movie)
        document.querySelector('#infoBox').style.display = 'block'
    }

    return (
        <div id="nom-div">
            {props.nomsFull && <Banner/>}
            <h1>Nominations</h1>
            <ul>
                {props.list.map(m => {
                    return <li onClick={() => selectMovie(m)} key={m.imdbID} className='list-group-item justify-list-item'>
                        <span className='list-left'>{`${m.Title} - ${m.Year}`}</span>
                        <button onClick={(e) => props.removeFromNoms(e, m)} className='btn btn-outline-warning btn-sm'>Remove</button>
                    </li>
                })}
            </ul>
            {props.list.length > 0 && <p className="para">⬆️ Click to see movie poster! ⬆️</p>}
            <Info movie={infoMovie}/>
        </div>
    )
}

export default NomList