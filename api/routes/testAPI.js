var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

//github

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

const connection = "mongodb://akhil:dark_knight47@sage-cuisine-shard-00-00.tye4j.mongodb.net:27017,sage-cuisine-shard-00-01.tye4j.mongodb.net:27017,sage-cuisine-shard-00-02.tye4j.mongodb.net:27017/test?replicaSet=atlas-11mkry-shard-0&ssl=true&authSource=admin";
router.get("/:type", function(req, res, next) {
    MongoClient.connect(connection,{ useUnifiedTopology:true },function(err, client){
        
        if(err){
            throw err
        }
        else{
            const db = client.db('sagecuisine');
           
           db.collection(req.params.type).find({}).toArray(function(err, result) {
                if (err) throw err;
                res.send(result)
           });


        
        }

});
    
});

router.get("/:type/:msg", function(req, res, next) {
    MongoClient.connect(connection,{ useUnifiedTopology:true },function(err, client){
        
        if(err){
            throw err
        }
        else{
            const db = client.db('sagecuisine');
           
           db.collection(req.params.type).findOne({'Name':req.params.msg},/*.toArray*/function(err, result) {
                if (err) throw err;
                res.send(result)
           });


        
        }

});
    
});

module.exports = router;