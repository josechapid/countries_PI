import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css"

function SearchBar (){
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [name, setName]= useState("")

    function handleInputChange (e){
        setName(e.target.value)
    } 
     
    function handleSubmit(e){
     e.preventDefault()
     dispatch(getNameCountries(name))
     setName("")   
    }
        

    return(
        <div className={style.input}>
            <input type="text" value={name} onChange={handleInputChange} placeholder="Buscar Pais por Nombre"/>
            <button type="submit" onClick={handleSubmit}>Buscar</button>
        </div>
    )
}

export default SearchBar