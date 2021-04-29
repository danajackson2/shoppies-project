import React from 'react'

function NomList(props){
    return (
        <div id="nom-div">
            <h1>Nominations</h1>
            <ul>
                <li className='list-group-item justify-search-item'><span>Rambo - 1946</span><button className='btn btn-secondary'>Remove</button></li>
                {props.list.map(m => <li className='list-group-item'><span>{`${m.Title} - ${m.Year}`}</span><button className='btn btn-secondary'>Remove</button></li>)}
            </ul>
        </div>
    )
}

export default NomList