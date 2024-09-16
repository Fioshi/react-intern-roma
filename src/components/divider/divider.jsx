import React from 'react';
import "../divider/divider.css"

function Divider({typeDivider}){
    return(
        <div>
            <hr className={`m-4 ${typeDivider}`} />
        </div>
    );
}

export default Divider;