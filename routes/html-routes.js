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

  app.get("/food", function(req, res) {
    //var orgId = req.params.orgId; 
    db.org.findAll({
      where:{Food: true}, 
      //include:[
          //{ model: db.services , 
            
            //}
          //]
       })
       .then(function(result) {
         console.log(result)

       //  res.json(result)
        res.render('food', {org: result})
          
     });
  });


    app.get("/daycare", function(req, res) {
      db.org.findAll({
        where:{Daycare: true},
      }).then(function(result){
        console.log(result)
        res.render('daycare', {org : result})
      })
    //res.render('daycare', function (err, html) {
        //res.send(html)
      //})
  });

  app.get("/health", function(req, res) {
    db.org.findAll({
      where:{Mental_Health: true},
      }).then(function(result){
        console.log(result)
        res.render('health', {org : result})
    //res.render('health', function (err, html) {
        //res.send(html)
      //})
  });
});

  app.get("/shelter", function(req, res) {
    db.org.findAll({
      where:{ Shelter: true},
      }).then(function(result){
        console.log(result)
        res.render('shelter', {org : result})

    //res.render('shelter', function (err, html) {
        //res.send(html)
      //})
  });
});

  app.get("/orgs", function(req, res) {
    db.org.findAll({}).then(function(result){
      console.log(result)
        res.render('orgs', {org : result})
    })
    //res.render('orgs', function (err, html) {
        //res.send(html)
      //})
  });

  app.get("/edit", function(req, res) {
    res.render('edit', function (err, html) {
        res.send(html)
      })
  });

}




