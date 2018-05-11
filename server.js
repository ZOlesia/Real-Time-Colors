var express = require("express");
var app = express();
var path = require("path");


var server = app.listen(1337, function() {
    console.log("listening on port 6789");
});
var io = require('socket.io')(server);



app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');




io.on('connection', function (socket) { //2

    socket.on('change_color', function(data){
        io.emit('background_color',data);
    })
    // console.log(io.engine.clientsCount);
    // io.emit('update_count', {num: count});
    // socket.on('update_count', function()
    // {

    //     io.emit('update_count', {num: count});
    // })

    // socket.on('reset_count', function()
    // {
    //     count = 0;
    //     io.emit('reset_count', {num: count});
    // })

  });

app.get('/', function(req, res) 
{
    res.render("index");
})




