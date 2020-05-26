// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render('index', function (err, html) {
        res.send(html)
      })
  });

  // login route
  app.get("/login", function(req, res) {
    res.render('login', function (err, html) {
        res.send(html)
      })
  });

  // Form route
  app.get("/form", function(req, res) {
    res.render('form', function (err, html) {
        res.send(html)
      })
  });

  //Signup Route
  app.get("/create", function(req, res) {
    res.render('create', function (err, html) {
        res.send(html)
      })
  });

  app.get("/food/:orgId", function(req, res) {
    var orgId = req.params.orgId; 
    db.org.findAll({
      where:{id: orgId}, 
      include:[
          { model: db.services , 
            
            }
          ]
       })
       .then(function(result) {
         console.log(result)

       //  res.json(result)
        res.render('food', {org: result})
          
     });
     
   
  });


    app.get("/daycare", function(req, res) {
    res.render('daycare', function (err, html) {
        res.send(html)
      })
  });
  app.get("/health", function(req, res) {
    res.render('health', function (err, html) {
        res.send(html)
      })
  });

  app.get("/shelter", function(req, res) {
    res.render('shelter', function (err, html) {
        res.send(html)
      })
  });

  app.get("/orgs", function(req, res) {
    res.render('orgs', function (err, html) {
        res.send(html)
      })
  });






};
