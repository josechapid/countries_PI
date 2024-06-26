const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
      },
      name: {
        type: DataTypes.STRING,
        
      },
      difficulty: {
        type: DataTypes.ENUM("1", "2", "3","4", "5"),
        
      },
      duration: {
        type: DataTypes.ENUM(
          "Una hora",
          "Dos horas",
          "Cuatro horas", 
          "Medio dia",
          "Un dia",
          "Tres dias",
          "Una semana"
        )
      },
      season: {
        type: DataTypes.ENUM( "Verano", "Otoño", "Invierno", "Primavera")
      },
    },
    { timestamps: false }
  );
};
