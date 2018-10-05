const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost:27017',(err, client) =>{
    var db = client.db('TodoApp');
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongoDB server');

    //deleteMany
    // db.collection('todos').deleteMany({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('todos').deleteOne({completed:false}).then((result) =>{
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('todos').findOneAndDelete({_id:ObjectId('5bb70a9d6080f47cf5a7f0b3')}).then((result) =>{
        console.log(result);
    });

    //deletemany
    // db.collection('todos').deleteMany({name:'test'}).then((result) =>{
    //     console.log(result);
    // })
    //client.close();
});