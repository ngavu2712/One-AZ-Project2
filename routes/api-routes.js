///Dependencies
//======================================================
var db = require("../models");
//var Org = require("../models/org.js");



//Routes
//=========================================================
module.exports = function(app) {

//Get all orgs
app.get("/api/org", function(req, res) {
    db.Org.findAll({}).then(function(dbOrg) {
      res.json(dbOrg);
    });
  });

  //Gets a specific org
  app.get("/api/org/:id", function(req, res) {
    // Find one Org with the id in req.params.id and return them to the user with res.json
    db.Org.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbOrg) {
      res.json(dbOrg);
    });
  });

  app.get("/api/edit", function(req, res) {
    
    // db.Org.findOne({
    //   where: {
    //     Email: req.body.email
    //   }
    // }).then(function(dbOrg) {
    //   res.json(dbOrg);
    // });
    console.log( req.body)
  });

  //create new org
  app.post("/api/org", function (req, res) {
   console.log(req.body)
    console.log("Create a new org");
     req.body.Food = req.body.Food==="food"?true:false;
     req.body.Shelter = req.body.Shelter==="shelter"?true:false;
     req.body.Daycare = req.body.Daycare==="daycare"?true:false;
     req.body.Mental_Health = req.body.Mental_Health==="health"?true:false;
     console.log(req.body)
     
    db.org.create({
        Name : req.body.Name,
        Email: req.body.Email,
        Phone: req.body.Phone,
        url: req.body.url,
        Description: req.body.Description,
        Days: req.body.Days,
        Address: req.body.Address,
        Food: req.body.Food,
        Shelter: req.body.Shelter,
        Daycare: req.body.Daycare,
        Mental_Health: req.body.Mental_Health

    }).then(function (Org) {
       // send back the Org id to client
       res.json(Org.id);
        console.log("Inserted a new organization into our org table!");
    }).catch(function(err){
      //if error
        console.log(err);
        //sends an error to the client
        res.send(false);
    })
})

//Selecting a specific service
app.get("/api/services/:id", function(req, res) {
  // Find one Service with the id in req.params.id and return them to the user with res.json
  db.Services.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbServices) {
    res.json(dbServices);
  });
});


  //Displays all services
  app.get("/api/services", function(req, res) {
    db.Services.findAll({}).then(function(dbServices) {
      res.json(dbServices);
    });
  });























};