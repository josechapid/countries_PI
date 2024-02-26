import React from "react";
import style from "./Paginado.module.css"

function Paginado ({countriesPerPAge, allCountries, paginado}){
    const pageNumbers= []
    for(let i=0; i<=Math.ceil(allCountries/countriesPerPAge); i++){
        pageNumbers.push(i+1)

    }
    return(
        <div className={style.paginado_container}>
            <nav>
                <ul className={style.paginado}>
                { pageNumbers && 
                pageNumbers.map(number=>(
                    <li className={style.number} key={number}>
                        <a onClick={()=> paginado(number)}>{number}</a>
                    </li>                    
                ))}
                </ul>
            </nav>        


        </div> 
    )
}

export default Paginado