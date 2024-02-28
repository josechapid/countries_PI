import React from "react";
import style from "./Paginado.module.css"

function Paginado ({countriesPerPAge, totalCountries, paginado}){
    const pageNumbers= []
    for(let i=1; i<=Math.ceil(totalCountries/countriesPerPAge); i++){
        pageNumbers.push(i)

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