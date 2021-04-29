import React from 'react'

function NomList(props){
    return (
        <div id="nom-div">
            <h1>Nominations</h1>
            <ul>
                {props.list.map(m => {
                    return <li className='list-group-item justify-list-item'>
                        <span>{`${m.Title} - ${m.Year}`}</span>
                        <button onClick={() => props.removeFromNoms(m)} className='btn btn-outline-warning btn-sm'>Remove</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default NomList