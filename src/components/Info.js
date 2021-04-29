import React from 'react'

function Info(props){

    const {Title, Poster, Year} = props.movie

    let infoBox = document.getElementById("infoBox")
    window.onclick = function(e){
        if (e.target === infoBox){
            infoBox.style.display = 'none'
        }
    }

    return (
        <div id="infoBox" class="modal">
            <div class="modal-content">
                <h1 id='modal-title'>{Title}</h1>
                <h2>{Year}</h2>
                <img className='poster' src={Poster}/>
            </div>
        </div>
    )
}

export default Info