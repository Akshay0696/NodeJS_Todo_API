const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb'); 


/* let id = '5bba17d2d0c44e1355834b0511';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

Todo.find({_id:id}).then((todos) =>{
    console.log('Todos',todos);
});

Todo.findOne({_id:id}).then((todo) =>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todoById) =>{
    if(!todoById){
        return console.log('Id not found');
    }
    console.log('TodoById', todoById);
}).catch((e) => console.log(e)); */

let user_id = '5bb7193c561a401e2187ad71';

User.findById(user_id).then((user) =>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));