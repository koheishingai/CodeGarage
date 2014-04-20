var express = require("express"),
    routes = require("./routes"),
    user = require("./routes/user"),
    http = require("http"),
    path = require("path"),
    cluster = require('cluster'),
    numCPUs = require('os').cpus().length;

var app = express();
if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
app.configure(function () {
    app.set("port", process.env.PORT || 3000), app.set("views", __dirname + "/views"), app.set("view engine", "ejs"), app.use(express.favicon()), app.use(express.logger("dev")), app.use(express.bodyParser()), app.use(express.methodOverride()), app.use(app.router), app.use(express.static(path.join(__dirname, "public")))
}), app.configure("development", function () {
    app.use(express.errorHandler())
}),app.get("/edit", routes.edit_menu) ,app.get("/edit/*", routes.edit), app.get("/*", routes.index), app.get("/users", user.list), http.createServer(app).listen(app.get("port"), function () {
    console.log(app.get("port"))
});
}