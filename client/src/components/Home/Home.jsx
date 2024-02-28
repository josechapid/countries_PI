//hooks
import React, { useState, useEffect }  from "react"
import {useDispatch, useSelector} from "react-redux"
import { getCountries, filterActivities, filterContinent, orderByName, searchCountry, sortPopulation, getActivities } from "../../redux/actions/actions"
import {Link} from "react-router-dom"
import axios from "axios"

//componentes
import Card from "../Cards/Cards"
import Paginado from "../Paginado/Paginado"
import SearchBar from "../SearchBar/SearchBar"

//style
import style from "./Home.module.css"

function Home (){
    const dispatch= useDispatch()    
    const allCountries= useSelector((state)=>state.countries)
    const activities= useSelector((state)=> state.activities)
    
    const [order, setOrder]= useState("")
    const [searchTerm, setSearchTerm]=useState("")
    const [currentPage, setCurrentPage]=useState(1)
    const [countriesPerPage, setCountriesPerPage]= useState(10)    
    
    useEffect(()=>{
      dispatch(getCountries())
    },[])

    useEffect(()=>{
      dispatch (getActivities())
    }, [dispatch])

    function handleFilterContinent(e){
      dispatch(filterContinent(e.target.value))
      setCurrentPage(1) //aqui modifique
    }

    function handleSort(e){
      e.preventDefault();
      console.log("valor seleccionado: ", e.target.value);
      dispatch(orderByName(e.target.value))
      setCurrentPage(1);
      setOrder(`Ordenado ${e.target.value}`)
    }
    
    function handleSearch(term){
      console.log("search term: ", term);
      setSearchTerm(term)
      setCurrentPage(1); //aqui modifique
      dispatch(searchCountry(term));
    }

    const filteredCountries = allCountries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginado= (pageNumber) =>{
      setCurrentPage(pageNumber)
    }
    
    function handleClick(){
        dispatch(getCountries())
        setSearchTerm("")
        setCurrentPage(1)
    }

    async function handleSortPopulation(order){    
      try {
      const response = await axios.get("http://localhost:3001/countries");{
        
      } console.log(response.data);
      const sortedCountries = response.data.sort((a, b) => {
        const populationA = parseInt(a.population);
        const populationB = parseInt(b.population);
        switch (order) {
          case "Asc":
            console.log("entre a el asc");
            return populationA - populationB;
          case "Desc":
            console.log("entre a el desc");
            return populationB - populationA;
          default:
            return 0;
        }
      });
      console.log("Desde la home", sortedCountries);
      dispatch(sortPopulation(sortedCountries));
    } catch (error) {
      console.error("Error en el ordenamiento de la población:", error);
    }
  }

  function handleFilterActivity (e){
    const selectedActivityId = e.target.value;
    console.log(selectedActivityId);
    dispatch(filterActivities(selectedActivityId))
  }
    

    const indexOfLastCountry= currentPage * countriesPerPage
    const indexOfFirstCountry= indexOfLastCountry - countriesPerPage
    const currentCountries = filteredCountries.slice(indexOfFirstCountry,indexOfLastCountry);
    
    return (
      <div className={style.container}>
        <h1 className={style.title}>COUNTRIES APP</h1>

        <div className={style.buttonContainer}>
          <Link className={style.button} to="/form">
            Crear Actividad
          </Link>
          <button className={style.button} onClick={handleClick}>
            Cargar Paises
          </button>
        </div>

        <SearchBar onSearch={handleSearch} />

        <div className={style.select_container}>
          <select onChange={(e) => handleSort(e)}>
            <option value="Placeholder" disabled>
              Orden alfabetico
            </option>
            <option value="Asc">Ordenar A-Z</option>
            <option value="Desc">Ordenar Z-A</option>
          </select>

          <select
            name="sortPop" id="order" onChange={(e) => handleSortPopulation(e.target.value)} defaultValue="Placeholder">
            <option value="Placeholder" disabled>Ordenar por población</option>
            <option value="Asc">Ascendente</option>
            <option value="Desc">Descendente</option>
          </select>

          <select onChange={(e) => handleFilterContinent(e)}>
            <option value="Placeholder" disabled>
              Continentes
            </option>
            <option value="All">Todos</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Antarctic">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <select onChange={(e)=>handleFilterActivity(e)}>
            <option value="Placeholder" disabled>
              Filtrar por actividad turística 
            </option>
            {activities.map((activity)=>(
              <option key={activity.id} value={activity.name}>
                {activity.name}
              </option>
            ))}
          </select>

          <Paginado
            countriesPerPAge={countriesPerPage}
            totalCountries={filteredCountries.length}
            paginado={paginado}
          />

          <div className={style.cardContainer}>
            {currentCountries.map((country) => (
              <div className={style.card} key={country.id}>
                <Link to={"/home/" + country.id}>
                  <Card
                    name={country.name}
                    image={country.image}
                    continents={country.continents}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home