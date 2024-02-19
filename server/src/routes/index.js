const { Router } = require("express");
const router = Router();

//routes
const getCountries = require ("../controllers/getCountries")
const getActivities = require ("../controllers/getActivities")
const getCountriesById = require ("../controllers/getCountriesById")
const getCountriesName = require("../controllers/getCountriesName")
const postActivities = require ("../controllers/postActivities")

//rutas
router.get("/countries", getCountries)
router.get("/countries/name", getCountriesName)
router.get("/countries/:id", getCountriesById)
router.get("/activities", getActivities)
router.post("/countries", postActivities)




module.exports = router;
