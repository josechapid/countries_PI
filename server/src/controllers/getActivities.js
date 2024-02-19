const {Country, Activity}= require ("../db.js")

const getActivities = async (req, res) =>{
    try {
        const allACtivities= await Activity.findAll({include:Country})
        res.status(200).json(allACtivities)
        
    } catch (error) { 
        res.status(500).json({error:error.message})
        
    }
}
module.exports = getActivities