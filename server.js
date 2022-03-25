const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const bycrpt = require('bcrypt')
const user = require('./models/User')
mongoose.connect('mongodb://localhost:27017/user_register',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cors())
const port = process.env.PORT || 5000;

// app.get('/',(req,res,next)=>{
//     res.send("hello")
// })
app.post('/register',(req,res,next)=>{
    console.log(req.body.emial)

    const newUser = new user({
        email: req.body.email,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: bycrpt.hashSync(req.body.password,10)
    })
    newUser.save(err =>{
        if(err){
            return res.status(400).json({
                title: 'The email is in used!',
                erorr: 'The email is in used!!'
            })
        }
        return res.status(200).json({
            title: 'Login success'
        })
    })
})

app.listen(port , (err)=>{
    if(err) return  console.log(err);
    console.log(`The server running on port : ${port}`);
})