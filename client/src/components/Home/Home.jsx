//hooks
import React from "react"
import { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getCountries, filterContinent, orderByName, getNameCountries } from "../../redux/actions/actions"
import {Link} from "react-router-dom"

//componentes
import Card from "../Cards/Cards"
import Paginado from "../Paginado/Paginado"
import SearchBar from "../SearchBar/SearchBar"

//style
import style from "./Home.module.css"



function Home (){

    const dispatch= useDispatch()
    const allCountries= useSelector((state)=>state.countries)
    console.log("All Countires: ", allCountries);

    const [order, setOrder]= useState("")

    const [currentPage, setCurrentPage]=useState(1)
    const [countriesPerPage, setCountriesPerPage]= useState(10)
    const indexOfLastCountries= currentPage * countriesPerPage
    const indexOfFirstCountries= indexOfLastCountries - countriesPerPage
    const currentCountries= Array.isArray(allCountries) ?  allCountries.slice(indexOfFirstCountries, indexOfLastCountries): []

    const paginado= (pageNumber) =>{
      setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getCountries())
    },[])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    function handleFilterContinent(e){
        dispatch(filterContinent(e.target.value))
    }

    function handleSort(e){
      e.preventDefault();
      console.log("valor seleccionado: ", e.target.value);
      dispatch(orderByName(e.target.value))
      setCurrentPage(1);
      setOrder(`Ordenado ${e.target.value}`)
    }

    function handleSearch(name){
      console.log("search term: ", name);
      dispatch(getNameCountries(name));
      setCurrentPage(1)
    }


    return (
      <div className={style.container}>
        <h1 className={style.title}>COUNTRIES APP</h1>
        <div className={style.buttonContainer}>

        <Link className={style.button} to="/form">Crear Actividad</Link>
        <button className={style.button} onClick={(e) => { handleClick(e)}}>Cargar  Paises</button>

        </div>
          

        <SearchBar onSearch={handleSearch}/>
     


        <div className={style.select_container}>
          <select onChange={(e) => handleSort(e)}>
            <option value="Asc">Ordenar A-Z</option>
            <option value="Desc">Ordenar Z-A</option>
          </select>
          <select>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          <select onChange={(e) => handleFilterContinent(e)}>
            <option value="All">Todos</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Antarctic">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <Paginado
            countriesPerPAge={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
          />

          <div className={style.cardContainer}>
            {currentCountries?.map((country) => {
              return (
                <div className={style.card} key={country.id}>
                  <Link to={"/detail/" + country.id}>
                    <Card
                      name={country.name}
                      image={country.image}
                      continents={country.continents}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Home