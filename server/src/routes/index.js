const { Router } = require("express");
const router = Router();

//routes
const getCountries = require ("../controllers/getCountries")



//rutas
router.get("/countries", getCountries)



module.exports = router;
