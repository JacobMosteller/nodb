import React from 'react';
import './Input.css';

const Inputs = (props) => {
    return(
        <div className='Inputs'>
        <input className='track' onChange={props.update} placeholder='Song Title'/>
        <button className='add' onClick={props.add}>Add Song</button>

        </div>
    )
}

export default Inputs;