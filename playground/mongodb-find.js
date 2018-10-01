const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',(err, client) =>{
    var db = client.db('TodoApp');
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongoDB server');

    db.collection("todos").find({completed:true}).toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) =>{
        console.log('Unable to fetch todos', err);
    });

    //client.close();
});