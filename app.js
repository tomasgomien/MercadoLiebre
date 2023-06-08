const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.use('normalize',express.static(path.join(__dirname, '/node_modules/normalize.css')));

app.get('/',function(req,res){
    res.sendFile((__dirname + '/views/home.html'))
});

app.get('/register',function(req,res){
    res.sendFile((__dirname + '/views/register.html'))
});

app.get('/login',function(req,res){
    res.sendFile((__dirname + '/views/login.html'))
});

app.listen(3001,function(){
    console.log("Servidor corriendo");
});