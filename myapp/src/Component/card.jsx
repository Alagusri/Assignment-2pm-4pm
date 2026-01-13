import React, {useState} from 'react';

function card({children}){

    const[state, setState]=useState(initialvalue)

    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default card