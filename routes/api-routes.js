///Dependencies
//======================================================
var Org = require("../models/orgs.js");



//Routes
//=========================================================
module.exports = function(app) {
//Get all orgs and services
app.get("/api/all", function(req, res) {
    Org.findAll({}).then(function(results) {
      res.json(results);
    });
  });


  //create new org
  app.post("/api/org", function (req, res) {
    console.log("Create a new org");

    db.azone.create({
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

    }).then(function (result) {
        console.log("Inserted a new organization into our org table!");
    }).catch(function (err) {
        console.log(err);
    })
})

//Selecting a specific service
app.get("/api/services/:serviceId", function(req, res) {
    Org.findAll({}).then(function(results) {
      res.json(results);
    });
  });























};