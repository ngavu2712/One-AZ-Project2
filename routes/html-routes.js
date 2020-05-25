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

  // cms route loads cms.html
  app.get("/login", function(req, res) {
    res.render('login', function (err, html) {
        res.send(html)
      })
  });

  // blog route loads blog.html
  app.get("/form", function(req, res) {
    res.render('form', function (err, html) {
        res.send(html)
      })
  });

  app.get("/create", function(req, res) {
    res.render('create', function (err, html) {
        res.send(html)
      })
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
