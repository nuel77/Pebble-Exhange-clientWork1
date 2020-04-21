const express=require('express');
const app =express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
io.on('connection', (socket) => {
    console.log('a user connected');
});

app.post('/sellPost',(req,res)=>{
    console.log(req.body);
    res.send("got it");
});

app.post('/buyPost',(req,res)=>{
    console.log(req.body);
    res.send("got it");
});
server.listen(3300);


