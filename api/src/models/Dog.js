const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heightMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      heightMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weightMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weightMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },/* 
      like: {
        type: DataTypes.STRING,
      }, */
    },
    { timestamps: false }
  );
};
