module.exports = function(sequelize,DataTypes){


var Org = sequelize.define("org", { 
  ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
},
  Name:{
  type: DataTypes.STRING,
  allowNull: false
},
  Email:{
      type: DataTypes.STRING,
      allowNull: true
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false
},
  url:{
    type: DataTypes.STRING,
    allowNull: true
},
  Description: {
    type: DataTypes.TEXT,
    allowNull: false
},
Days: {
  type: DataTypes.STRING,
  allowNull: true
},
  Address: {
    type: DataTypes.STRING,
    allowNull: false
},
  Food: {
    type: DataTypes.BOOLEAN,
    allowNull: true
},
  Shelter:{
    type: DataTypes.BOOLEAN,
    allowNull: true
},
  Daycare:{
    type: DataTypes.BOOLEAN,
    allowNull: true
},
  Mental_Health:{
    type: DataTypes.BOOLEAN,
    allowNull: true
}
});

return Org

}
