
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
          /* const activityFilter = state.allCountries.filter(country=> country.Countries.some(countryActivity=> countryActivity.name === action.payload))
          console.log(action.payload); */
           const filteredCountry = [...state.filterCountries].filter(
             (activity) => {
               for (const country of activity.Countries) {
                 if (
                   country[0].name !== undefined &&
                   country[0].name === action.payload
                 ) {
                   return country.name;
                 }
               }
             }
           );
          return {
            ...state,
            countries: filteredCountry,
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