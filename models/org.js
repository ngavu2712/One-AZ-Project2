module.exports = function(sequelize,DataTypes){


var Org = sequelize.define("org", { 
  //ID: {
   //   type: DataTypes.INTEGER,
    //  primaryKey: true,
    //  allowNull: true
//},
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
    allowNull: true
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
    //type: DataTypes.STRING,
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

Org.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  Org.hasMany(models.services, {
    onDelete: "cascade"
  });
};

Org.sync()
return Org

}
