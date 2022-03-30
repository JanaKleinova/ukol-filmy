import React from 'react';
import './style.css';



const Actor = ({name, as}) => {
    
    return(

        <div className="actor">
				<p><span>{name}</span> as {as}</p>
		</div>

    )};

    export default Actor;