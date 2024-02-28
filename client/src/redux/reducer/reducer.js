
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

        case "FILTER_ACTIVITY":
          const allActivities = state.allCountries;
          const activityFilter =
            action.payload === "All"
              ? allActivities
              : allActivities.filter(
                  (country) =>
                    country.country_activity &&
                    country.country_activity.ActivityId === action.payload
                );
          return {
            ...state,
            countries: activityFilter,
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

      case "GET_ACTIVITIES":
        return {
          ...state,
          activities: action.payload,
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
          return {
            ...state,
            countries: action.payload.countries,
          }
        

      default:
        return state;
    }

}
export default rootReducer