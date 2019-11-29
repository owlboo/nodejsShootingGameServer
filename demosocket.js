
var app = require('express')();
var server = require('http').Server(app);

var io = require('socket.io')(server);

server.listen(9999);

app.get('/',function(req,res){
    res.send('haalo you got back');
});


io.on('connection',socket=>{


    //demo string
    //send message
    socket.emit("message", {hello: 'world'});

    //listen event sent by clients
    socket.on('message',data=>{
        var response = "This is the response from server "+data;
        console.log(data);
    });



    //demo json
    var user ={
        name:"aaa",
        message:"abc"
    }

    socket.emit("player",JSON.stringify(user));

    socket.on('player', data=>{
        console.log(data);
        socket.emit("player", JSON.stringify(data));
    });
});
console.log('--server running--');