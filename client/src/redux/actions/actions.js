import axios from "axios"

export function getCountries(){ 
    return async (dispatch)=>{
        try {
            const response = await axios.get("http://localhost:3001/countries")
            dispatch({
                type: "GET_COUNTRIES",
                payload: response.data,
            })
            
        } catch (error) {
            console.error("Error getCountries: ", error);            
        }
    }
} // los  paises

export function getActivities (){
    return async (dispatch)=>{
        try {
            const response = await axios.get(`http://localhost:3001/activities`);
            dispatch({type: "GET_ACTIVITIES", payload: response.data})
            
        } catch (error) {
            console.error("Error getActivities: ", error)
        }
    }
} // obtener actividades

export function postActivities(payload){
    return async (dispatch)=>{
        try {
            const response = await axios.post("http://localhost:3001/countries", payload);
            console.log(response);
            return response
        } catch (error) {
            
        }
    }
}

export function filterContinent(payload){
    console.log(payload);
    return {        
            type: "FILTER_BY_CONTINENT",
            payload           
        }
    } // filtro continentes

export function orderByName(payload){
    console.log(payload)
    return {
        
        type: "ORDER_BY_NAME",
        payload
    }
} // por orden alfabetico

export function searchCountry(term){
    return{
        type: "SEARCH_COUNTRY",
        payload: term,
    }
}

export function sortPopulation (order){
    return { type: "SORT_POPULATION", payload: order};
}


export function filterActivities (payload){
    return {
        type: "FILTER_ACTIVITY",
        payload,
    }
}
