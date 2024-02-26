import React from "react";

function Card ({name, image, continents}){
    return (
        <div>
            <img src={image} alt="img not found" width="300px" height="200px" />
            <h3>{name}</h3>
            <h3>{continents}</h3>
        </div>
    )
}
export default Card