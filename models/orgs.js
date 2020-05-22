<<<<<<< HEAD
//var Sequelize = require("sequelize");

//var sequelize = require("../config/connection.js");
=======
module.exports = function(sequelize,DataTypes){
>>>>>>> a06e246937cfb5274c075925c99b611380f43092


var Org = Sequelize.define("org", { 
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
<<<<<<< HEAD
Days: { 
  type: Sequelize.TEXT,
=======
Days: {
  type: DataTypes.STRING,
>>>>>>> a06e246937cfb5274c075925c99b611380f43092
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
