module.exports = function(sequelize,DataTypes){



var Services = sequelize.define("services", {
     
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
    }
    // OrgId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }   
})
Services.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Services.belongsTo(models.org, {
      foreignKey: {
        allowNull: false
      }
    });
  };

Services.sync()
return Services

}