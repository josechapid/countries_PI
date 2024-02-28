import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { postActivities, getCountries } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

import style from "./CreateActivity.module.css"


function CreateActivity(){
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const countries= useSelector((state)=> state.countries)
   

    const [input, setInput] = useState({
      name: "",
      difficulty: "",
      duration: "Una hora",
      season: "Verano",
      countries: [],
    });

    useEffect(()=>{
        dispatch(getCountries())
    }, [])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input);
    }

    function handleCheck(e){
        
            setInput({
                ...input,
                difficulty: e.target.value
            })
        
        console.log(input);
    }

    function handleSelect(e){
        const {name, value}= e.target
        if(name==="duration"){
            setInput({
              ...input,
              duration: e.target.value,
            });
            console.log(input)
        }
        else if (name==="season"){
            setInput({
              ...input,
              season: e.target.value,
            });
            console.log(input);
        } else if(name=== "countries"){
            setInput({
                ...input, 
                countries: [...input.countries, e.target.value]
            })
            console.log(input);

        }
    }

        function handleSumit (e){
            e.preventDefault()
            console.log(input);
            dispatch(postActivities(input))
            alert("Actividad Creada")
            setInput({
              name: "",
              difficulty: "",
              duration: "Una hora",
              season: "Verano",
              countries: [],
            });
            navigate("/home")

        }


    return (
      <div className={style.general}>
        <div className={style.container}>
          <Link to="/home">
            <button className={style.button}>Volver</button>
          </Link>
          <h1>Crear activity</h1>
          <form onSubmit={handleSumit}>
            <div className={style.formGroup}>
              <label className={style.label}>Name: </label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
                className={style.input}
              />
            </div>

            <div className={style.radioGroup}>
              <label className={style.label}>Difficulty:</label>
              <div className={style.radioOption}>
                <label className={style.radioLabel}>1</label>
                <input
                  type="radio"
                  value="1"
                  name="difficulty"
                  onChange={handleCheck}
                  className={style.input}
                />
              </div>
              <div className={style.radioGroup}>
                <label className={style.radioLabel}>2</label>
                <input
                  type="radio"
                  value="2"
                  name="difficulty"
                  onChange={handleCheck}
                  className={style.input}
                />
              </div>
              <div className={style.radioOption}>
                <label className={style.radioLabel}>3</label>
                <input
                  type="radio"
                  value="3"
                  name="difficulty"
                  onChange={handleCheck}
                  className={style.input}
                />
              </div>
              <div className={style.radioOption}>
                <label className={style.radioLabel}>4</label>
                <input
                  type="radio"
                  value="4"
                  name="difficulty"
                  onChange={handleCheck}
                  className={style.input}
                />
              </div>
              <div className={style.radioOption}>
                <label className={style.radioLabel}>5</label>
                <input
                  type="radio"
                  value="5"
                  name="difficulty"
                  onChange={handleCheck}
                  className={style.input}
                />
              </div>
            </div>

            <div className={style.formGroup}>
              <label className={style.label}> Duration: </label>
              <select
                name="duration"
                onChange={handleSelect}
                className={style.select}
              >
                <option value="Una hora">Una hora</option>
                <option value="Dos horas">Dos horas</option>
                <option value="Cuatro horas">Cuatro horas</option>
                <option value="Medio dia">Medio dia</option>
                <option value="Un dia">Un dia</option>
                <option value="Tres dias">Tres dias</option>
                <option value="Una semana">Una semana</option>
              </select>
            </div>
            <div className={style.formGroup}>
              <label className={style.label}> Season: </label>
              <select
                name="season"
                onChange={handleSelect}
                className={style.select}
              >
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                <option value="Primavera">Primavera</option>
              </select>
            </div>
            <div className={style.formGroup}>
              <label className={style.label}> Countries: </label>
              <select
                name="countries"
                onChange={handleSelect}
                className={style.select}
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <ul>
              <li>{input.countries.map((country) => country + " ,")}</li>
            </ul>

            <button type="submit" className={style.button}>
              Crear Activity
            </button>
          </form>
        </div>
      </div>
    );
}

export default CreateActivity