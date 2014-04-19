var async = require("async"),
    fs = require("fs"),
    sys = require("sys"),
    exec = require("child_process").exec,
    redis = require("redis"),
    client = redis.createClient();

    client.on("error", function (err) {
        console.log("Error " + err);
    });

exports.index = function(req, res){
  console.log(req.url);
  //client.get('/', function(err, val){
  res.writeHead(200, {"Content-Type": "text/html"}); 
  res.write("test");
  res.end();
  //});
};