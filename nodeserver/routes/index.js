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
  var url = req.url;
  client.get(url, function(err, val){
      res.writeHead(200, {"Content-Type": "text/html"}); 
      res.write(val);
      res.end();
  });
};

exports.edit = function(req, res){
  var url = req.url;
      url = url.split("/edit").join("");
  client.get(url, function(err, val){
      res.writeHead(200, {"Content-Type": "text/html"}); 
      res.write("edit "+val);
      res.end();
  });
};

exports.edit_menu = function(req, res){
  //client.get('edit', function(err, val){
      res.writeHead(200, {"Content-Type": "text/html"}); 
      res.write("edit");
      res.end();
  //});
};