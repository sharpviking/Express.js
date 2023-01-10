// const express = require('express')

// const app = express();
// app.get('/', (req, res) => {
//     res.send('get request')
// })

// app.listen('5000', () => {
//     console.log("server is running");
// })

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

const MyModel = mongoose.model('ModelName', mySchema);
mongoose.connect('mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test')
    .then(() => console.log('Connected!'));

module.export = MyModel;

const Users = new.Schema;
const ObjectId = Schema.ObjectId;

const users = new Schema({
    username: ObjectId,
    email: String,
    password: String,
    date: Date
});

const UserModel = mongoose.model('UserModel', Users);


module.export = UsereModel;

mongoose.connect('mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test')
    .then(() => console.log('Connected!'));

const UsereModel = require


let Username = req.body.username;
let email = req.body.email;
let password = req.body.password;
let userdata = {
    username: username,
    email: email,
    password: password,

}
let resultData = new UserModel(userdata);
resultData.save().then(item => {
    res.send("item added successfully")
}).catch((err) => {
    console.log("error in adding data");
})


