var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var Org = sequelize.define("org", { 
  ID: {
      type: Sequelize.INTEGER,
      primaryKey: true
},
  Name:{
  type: Sequelize.STRING,
  allowNull: false
},
  Email:{
      type: Sequelize.STRING,
      allowNull: true
  },
  Phone: {
    type: Sequelize.STRING,
    allowNull: false
},
  url:{
    type: Sequelize.STRING,
    allowNull: true
},
  Description: {
    type: Sequelize.TEXT,
    allowNull: false
},
<<<<<<< HEAD
Days: {
  type: Sequelize.STRING,
=======
Days: { 
  type: Sequelize.TEXT,
>>>>>>> 021d51580c21671ab262d3236f78162c52cdff43
  allowNull: true
},
  Address: {
    type: Sequelize.STRING,
    allowNull: false
},
  Food: {
    type: Sequelize.BOOLEAN,
    allowNull: true
},
  Shelter:{
    type: Sequelize.BOOLEAN,
    allowNull: true
},
  Daycare:{
    type: Sequelize.BOOLEAN,
    allowNull: true
},
  Mental_Health:{
    type: Sequelize.BOOLEAN,
    allowNull: true
}
});

// Syncs with DB
Org.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Org;