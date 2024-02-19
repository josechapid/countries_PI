const axios =require ("axios")
const {Country} = require("../db")

const getCountries = async (req, res)=>{
    try {
        const countriesInDB= await Country.findAll();
        if (countriesInDB.length >0) {
          res.status(200).json(countriesInDB);
          console.log("entramos en la base de datos");
          return
        }

        const response = await axios.get("http://localhost:5000/countries");
        if (response){
            const dataCountries = response.data.map((country) => ({
              id: country.cca3,
              name: country.name.common,
              image: country.flags.png,
              coatOfArms: country.coatOfArms.png,
              continents: country.region,
              capital: country.capital?.[0],
              subregion: country.subregion,
              area: country.area,
              population: country.population,
              maps: country.maps.googleMaps,
            }));

            await Country.bulkCreate(dataCountries)
            console.log("entramos en la api");
            res.status(200).json(dataCountries)
        }
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}
module.exports= getCountries