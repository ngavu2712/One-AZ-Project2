var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var Org = sequelize.define("org", { 
  ID: {
      type: Sequelize.STRING,
      primaryKey: true
},
  Email:{
      type: Sequelize.STRING,
      allowNull: false
  },
  Phone: {
    type: Sequelize.STRING,
    allowNull: false
},
  URL:{
    type: Sequelize.STRING,
    allowNull: true
},
  Description: {
    type: Sequelize.TEXT,
    allowNull: false
},
  Address: {
    type: Sequelize.STRING,
    allowNull: false
},
  Service1: {
    type: Sequelize.STRING,
    allowNull: false
},
  Service2:{
    type: Sequelize.STRING,
    allowNull: true
},
  Service3:{
    type: Sequelize.STRING,
    allowNull: true
},
  Service4:{
    type: Sequelize.STRING,
    allowNull: true
}
});

// Syncs with DB
Org.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Org;