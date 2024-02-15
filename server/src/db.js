require ("dotenv").config()
const { Sequelize } = require("sequelize");
const {CountryModel, ActivityModel}= require("./models/index")
const { DB_USER, DB_PASSWORD, DB_HOST, DB, DB_PORT, DB_NAME } = process.env;

const URL_CONEXION = `${DB}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;


const sequelize = new Sequelize(URL_CONEXION, {
  logging: console.log("base de datos sincronizada"),
  native: false,
});

CountryModel(sequelize);
ActivityModel(sequelize);


const { Country, Activity } = sequelize.models;
Country.belongsToMany(Activity, {through: "country_activity"})
Activity.belongsToMany(Country, {through: "country_activity"})

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Country,
  Activity,
};