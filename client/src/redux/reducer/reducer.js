
const inicialState={
    countries:[],
    allCountries:[]
}
function rootReducer (state= inicialState, action){
    switch (action.type) {
      case "GET_COUNTRIES":
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload,
        };
      case "GET_NAME_COUNTRIES":
          return{
            ...state,
            countries: action.payload
          };

      case "FILTER_BY_CONTINENT":
        const allCountries = state.allCountries;
        const statusFilter =
          action.payload === "All"
            ? allCountries
            : allCountries.filter(
                (elemento) => elemento.continents === action.payload
              );
        return {
          ...state,
          countries: statusFilter,
        };

      case "ORDER_BY_NAME":
        let orderedCountries = [...state.countries];

        switch (action.payload) {
          case "Asc":
            orderedCountries.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            break;
          case "Desc":
            orderedCountries.sort((a, b) =>
              b.name.localeCompare(a.name)
            );
            break;
          default:
            break;
        }
        return {
          ...state,
          countries: orderedCountries,
        };


      default:
        return state;
    }

}
export default rootReducer