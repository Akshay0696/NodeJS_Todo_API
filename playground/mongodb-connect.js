const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',(err, client) =>{
    var db = client.db('TodoApp');
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongoDB server');

    db.collection("todos").insertOne({
        text: 'Something to do',
        completed: false
    },(err, result) =>{
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
    //db.close();
});