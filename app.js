const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log(msg)
    });
    let counter = 0;
    let i = setInterval(function(){
        // do your thing
        socket.emit('event-2', {
            "txHash": "-" + counter,
            "date": "23/2/14",
            "pair": "6,2",
            "side": "213" + counter,
            "price": "3223l",
            "amount": "643",
            "filled": "4645",
            "notional": "6275" + counter
        });
        counter++;
        if(counter === 2) {
            clearInterval(i);
        }
    }, 3000);
});



app.post('/sellPost', (req, res) => {
    console.log(req.body);
    res.send("got it limit sellpost");
});

app.post('/buyPost', (req, res) => {
    console.log(req.body);
    res.send("got it limit buyPost");
});
app.post('/marketSellPost', (req, res) => {
    console.log(req.body);
    res.send("got it marketSellPost");
});
app.post('/marketBuyPost', (req, res) => {
    console.log(req.body);
    res.send("got it marketbuyPost");
});
server.listen(3300);


