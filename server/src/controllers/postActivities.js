const {Activity, Country} = require("../db")

const createActivity = async (req, res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body;

        if(!name || !difficulty || !duration || !season || !countries || countries.length ===0){
            throw new Error("Todos los campos son obligatorios")
        }
        const newActivity = await Activity.create({
            name, difficulty, duration, season
        })

        const relatedCountries = await Country.findAll({
          where: {
            name: countries.map(
              (country) =>
                country.toLowerCase().trim().charAt(0).toUpperCase() +
                country.slice(1)
            ),
          },
        });
         if (relatedCountries.length !== countries.length) {
           throw new Error(
             "Al menos uno de los países proporcionados no existe en la base de datos"
           );
         }
        await newActivity.setCountries(relatedCountries)

        res.status(200).json({message: "Actividad turistica creada exitosamente"})
        
    } catch (error) {
     res.status(400).json({error: error.message})    
    }
}
module.exports= createActivity