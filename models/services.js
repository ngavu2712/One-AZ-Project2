var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Services = sequelize.define("org", {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    OrgId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }   
})

// Syncs with DB
Services.sync();

module.exports = Services;