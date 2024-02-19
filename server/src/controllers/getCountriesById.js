const {Country, Activity} = require ("../db")

const getCountriesById = async (req, res)=>{
    try {
        const {id} = req.params;
        const upperCase= id.toUpperCase()
        if (id){
            const countryIdDb = await Country.findOne({
              where: { id: upperCase },
              include: [{ model: Activity }],
            });

            if(countryIdDb){
                const countryInfo={
                    id: countryIdDb.id,
                    name: countryIdDb.name,
                    image: countryIdDb.image,
                    coatOfArms: countryIdDb.coatOfArms,
                    continents: countryIdDb.continents,
                    capital: countryIdDb.capital,
                    subregion: countryIdDb.subregion,
                    area: countryIdDb.area,
                    population: countryIdDb.population,
                    maps: countryIdDb.maps,
                    activities: countryIdDb.Activities,
                }
                return res.status(200).json(countryInfo)
            }
        }
        return res.status(404).json({message: "Country no encontrado"});
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports= getCountriesById