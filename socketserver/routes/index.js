var io    = require("socket.io").listen(8083),
    redis = require("redis"),
    client = redis.createClient();

    client.on("error", function (err) {
        console.log("Error " + err);
    });
    
    
    
var RedisStore = require('socket.io/lib/stores/redis');
opts = {host:'127.0.0.1', port:6379};
io.set('store', new RedisStore({redisPub:opts, redisSub:opts, redisClient:opts}));

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

io.sockets.on("connection", function (e) {
    e.on("cgsin", function (r) {
        cgsflg = 0, hash = r.replace("#", ""), require("codeg"), e.emit("cdgout", codegout), delete require.cache[require.resolve("codeg")]
    }), e.on("publishit", function (r, t) {
        cgsflg = 1, codegins = r, randid = t.replace("#", ""), require("codeg"), delete require.cache[require.resolve("codeg")], e.emit("done")
    })
    
    e.on("updates", function(){
        console.log('test');
        client.lrange('updates', 0, -1, function(err, obj){
            console.log(obj);
            for (i = 0; i < obj.length; i++) {
                e.emit('rUpdates', obj[i]);
            }
        });
    });
    
});