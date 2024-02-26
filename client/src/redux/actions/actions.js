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
}


export function filterContinent(payload){
    console.log(payload);
    return {
        
            type: "FILTER_BY_CONTINENT",
            payload           
        }
    }

export function orderByName(payload){
    console.log(payload)
    return {
        
        type: "ORDER_BY_NAME",
        payload
    }
}



export function getNameCountries(name){
    return async function (dispatch){
        try {
            const response = await axios.get(
              `http://localhost:3001/countries/name?name=${name}`
            ); 
              console.log(response.data);
              dispatch({type: "GET_NAME_COUNTRIES_SUCCESS", payload: response.data})
        } catch (error) {
            dispatch({type: "GET_NAME_COUNTRIES_FAILURE", payload:error});            
        }
    }
}

