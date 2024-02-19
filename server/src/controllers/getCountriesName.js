const { Country } = require("../db");


const getCountriesName= async (req, res)=>{
    try {
        const name = req.query.name;
        const lowerCase= name ? name.toLowerCase() : null;
        const triName = lowerCase ? lowerCase.trim() : null;
        const formattedName =
          triName.charAt(0).toUpperCase() + triName.slice(1);
        console.log(formattedName);
        let resCountry = null;
        const countryDB = await Country.findOne({
          where: { name: formattedName },
          attributes: [
            "id",
            "name",
            "image",
            "coatOfArms",
            "continents",
            "capital",
            "subregion",
            "area",
            "population",
            "maps",
          ],
        });
            if(countryDB){
                console.log("entramos al controlador de name");
                resCountry = {
                    id: countryDB.id,
                    name: countryDB.name,
                    image: countryDB.image,
                    coatOfArms: countryDB.coatOfArms,
                    continents: countryDB.continents,
                    capital: countryDB.capital,
                    subregion: countryDB.subregion,
                    area: countryDB.area,
                    population: countryDB.population,
                    maps: countryDB.maps,
                };
                
        }
        if(!resCountry){
            return res.status(404).json({message: "No se encontró Country con ese nombre"})
        }
        res.status(200).json(resCountry)

        
    } catch (error) {
        return res.status(500).json({message: "error del servidor al buscar Country"})
        
    }
}

module.exports= getCountriesName