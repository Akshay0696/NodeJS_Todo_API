const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb'); 

//Todo.remove({}).then((result) => console.log(result));

// Todo.findOneAndRemove({_id:'5bbaff762f5d4b4ee3fa54ee'}).then((todo) =>{
//     console.log(todo);
// })

Todo.findByIdAndRemove('5bbaff762f5d4b4ee3fa54ee').then((todo) =>{
    console.log(todo);
});