const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/',function(req,res){
    res.sendFile((__dirname + '/views/home.html'))
});

app.listen(3000,function(){
    console.log("Servidor corriendo");
});