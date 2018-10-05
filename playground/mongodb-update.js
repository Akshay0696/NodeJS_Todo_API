const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost:27017',(err, client) =>{
    var db = client.db('TodoApp');
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongoDB server');

    //findOneAndUpdate
    db.collection('users').findOneAndUpdate({
        _id:ObjectId('5bb70feb3b58b719659b721e')
    },{
        $inc:{
            age:1
        }
    },{
        returnOriginal: false
    }
    ).then((result) =>{
            console.log(result);
    })
    //client.close();
});