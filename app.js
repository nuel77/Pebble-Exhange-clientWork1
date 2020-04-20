const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post('/sellPost',(req,res)=>{
    console.log(req.body);
    res.send("got it");
});

app.post('/buyPost',(req,res)=>{
    console.log(req.body);
    res.send("got it");
});
const server = app.listen(3000,function () {
    console.log(" listening on port %d", server.address().port);
});