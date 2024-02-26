import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import style from "./Detail.module.css"

function Detail (){
  const [country, setCountry] = useState({});
  const [activities, setActivities]=useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/countries/${id}`
        );
        if(response.data){
            console.log(response.data);
            setCountry(response.data)
            if (response.data.activities && response.data.activities.length> 0){
                const activitiesDetail= response.data.activities.map(activity =>({
                    id: activity.id, 
                    name: activity.name,
                    difficulty: activity.difficulty,
                    duration: activity.duration,
                    season: activity.season
                }))
                setActivities(activitiesDetail)
            }
        } else{ 
            window.alert("No existe pais con ese ID")
        }
       
      } catch (error) {
        window.alert("No existe país con ese id");
      }
    };
    fetchCountries();
  }, [id]);

  return (
    <div className={style.container}>
      {Object.keys(country).length > 0 && (
        <div className={style.detailsContainer}>
          <h2>Detalles del País</h2>
          <h3>{country.name}</h3>
          <div className={style.flagsContainer}>
            <div className={style.flag}>
              {country.image && <img src={country.image} alt="Flag" />}
            </div>
            <div className={style.coatOfArms}>
              {country.coatOfArms && (
                <img src={country.coatOfArms} alt="Coat of Arms" />
              )}
            </div>
          </div>
          <div className={style.countryDetails}>
            <div>
              <p>
                <span>Id: </span>
                {country.id}
              </p>
              <p>
                <span>Continent: </span>
                {country.continents}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
              <p>
                <span>Area: </span>
                {country.area}
              </p>
              <p>
                <span>Subregion: </span>
                {country.subregion}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Map: </span>

                {country.maps && (
                  <a
                    href={country.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/854/854929.png"
                      alt="Mapa"
                    />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {activities.length > 0 && (
        <div className={style.activitiesContainer}>
          <h2>Activities en {country.name}</h2>

          {activities.map((activity) => (
            <div className={style.activityWrapper} key={activity.id}>
              <div className={style.activity}>
                <p>Name of the activity: {activity.name}</p>
                <p>Difficulty: {activity.difficulty} </p>
                <p>Duration: {activity.duration} </p>
                <p>Season: {activity.season} </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );}

export default Detail