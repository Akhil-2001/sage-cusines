var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

//github

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});


router.get("/:type", function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/',{ useUnifiedTopology:true },function(err, client){
        
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
    MongoClient.connect('mongodb://localhost:27017/',{ useUnifiedTopology:true },function(err, client){
        
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