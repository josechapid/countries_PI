const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coatOfArms: {
        type: DataTypes.STRING,
      },
      continents: {
        type: DataTypes.STRING,      
      },
      capital: {
        type: DataTypes.STRING,
        
      },
      subregion: {
        type: DataTypes.STRING,
        
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      population: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maps: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};