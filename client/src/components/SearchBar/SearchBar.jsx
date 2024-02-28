import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css"

function SearchBar ({onSearch}){
    const navigate= useNavigate()
    const [name, setName]= useState("")

    function handleInputChange (e){
        setName(e.target.value)
    } 
     
    function handleSubmit(){
     if(name){
        onSearch(name)
        navigate("/home")
     } else{
        alert("Debe escribir un nombre de pais")
     }
     setName("")   
    }
        

    return(
        <div className={style.input}>
            <input type="search" value={name} onChange={handleInputChange} placeholder="Buscar Pais por Nombre"/>
            <button onClick={handleSubmit}>Buscar</button>
        </div>
    )
}

export default SearchBar