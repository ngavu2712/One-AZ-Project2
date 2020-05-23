module.exports = function(sequelize,DataTypes){



var Services = sequelize.define("services", {
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