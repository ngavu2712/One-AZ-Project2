// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

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

  //Food route
  app.get("/food", function(req,res){
    org.selectAll(function(orgdb){
      res.render('food',{org : orgdb})
    })
  })


};
