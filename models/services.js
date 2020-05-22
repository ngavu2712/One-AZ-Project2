module.exports = function(sequelize,DataTypes){


<<<<<<< HEAD
//var sequelize = require("../config/connection.js");
=======
>>>>>>> a06e246937cfb5274c075925c99b611380f43092

var Services = Sequelize.define("services", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OrgId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }   
})

return Services

}