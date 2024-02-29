
const inicialState={
    countries:[],
    allCountries:[],
    activities: [],
    currentPage: 1,
    countriesPerPage: 10,
    filterCountries: [],
}
function rootReducer (state= inicialState, action){
    switch (action.type) {
      
      case "GET_COUNTRIES":
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload,
          filterCountries: action.payload,
          
        };

      case "FILTER_BY_CONTINENT":
        const allCountries = state.allCountries;
        const statusFilter =
          action.payload === "All"? allCountries : allCountries.filter(
                (elemento) => elemento.continents === action.payload
              );
        return {
          ...state,
          countries: statusFilter,
          currentPage: 1
        };
        
        case "GET_ACTIVITIES":
          return {
            ...state,
            activities: action.payload,
          };
        case "FILTER_ACTIVITY":   
        let info
        const filterActivity = state.activities.filter((activity) => {
          
          if (activity.name === action.payload) {
            info= activity.Countries.map(country => ({
                id: country.id,
                name: country.name,
                image: country.image,
                continents: country.continents,            
          }));    
          console.log(info);
        return info
        }})   
        console.log(filterActivity);
          return {
            ...state,
            countries: info,
            currentPage: 1,
          };



      case "ORDER_BY_NAME":
        let orderedCountries = [...state.countries];

        switch (action.payload) {
          case "Asc":
            orderedCountries.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "Desc":
            orderedCountries.sort((a, b) => b.name.localeCompare(a.name));
            break;
          default:
            break;
        }
        return {
          ...state,
          countries: orderedCountries,
        };


      case "POST_ACTIVITIES":
        return {
          ...state,
        };
      case "SEARCH_COUNTRY":
        const searchTerm = action.payload.toLowerCase();
        const filteredCountries = state.allCountries.filter((country) =>
          country.name.toLowerCase().includes(searchTerm)
        );
        return {
          ...state,
          countries: filteredCountries,
          currentPage: 1
        };

        case "SORT_POPULATION":
          const Ascendet= [...state.countries].sort((a,b)=> a.population - b. population)
          const Descendet= [...state.countries].sort((a,b)=> b.population - a. population)
          console.log(Ascendet);
          return {
            ...state,
            countries: action.payload === "Ascendent" ? Ascendet : action.payload === "Descendent" ? Descendet: state.countries
          }
        

      default:
        return state;
    }

}
export default rootReducer