"use strict";
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get("/", (req, res) => {
    res.locals.name = "test-api";
    res.render("index");
  });
};
