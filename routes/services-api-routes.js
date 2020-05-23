var Services = require("../models/services.js");

//Selecting a specific service
app.get("/api/services/:serviceId", function(req, res) {
    Services.findAll({}).then(function(results) {
      res.json(results);
    });
  });