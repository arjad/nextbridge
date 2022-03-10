import React from 'react';
import "./Movie.css";

export function Movie({name,description}) {

    return(<div>
        <h1 className="heading">NAME {name}</h1>  
        <p>Description {description}</p>
        </div>);
}