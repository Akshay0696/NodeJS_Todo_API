"use strict";
const express = require('express');
const bodyParser = require('body-parser'); // Takes the JSON response converts it to object and send to server
const {ObjectID} = require('mongodb'); 
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');


const app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) =>{
    let todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res) =>{
    Todo.find().then((todos) =>{
        res.send({todos});
    },(err) =>{
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req,res) =>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
       return res.status(404).send('Id not found');
    }

    Todo.findById(id).then((todo) =>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => res.status(400).send());
    
})

app.listen(3000, () =>{
    console.log('Started on port 3000');
})

module.exports = {app};