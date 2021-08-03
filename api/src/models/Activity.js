const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Activity = sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    duration:{
      type:DataTypes.STRING,
      allowNull:false
    },
    season:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    }
  },{
    freezeTableName: true,
    sequelize,
    tableName: 'activity'
  });
};
