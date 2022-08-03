//Task 2
var express = require('express');
var app = express();


app.use(express.json());

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/www'));

app.listen(3000, '127.0.0.1', function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at : ' + n + ':' + m);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/login.html');
});

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
});

app.get('/health', function(req, res){
    res.sendFile(__dirname + '/www/test.html')
})


//Task 3
var users = [{email: 'john@john', password: 'doe'}, {email: 'jane@jane', password: 'doe'}, {email: 'will@will', password: 'hall'}];

app.post('/login1', function(req, res) {
    if(!req.body){
        return res.sendStatus(400);
    }
    console.log('Got body:', req.body);
    var customer = {};
    customer.valid = false;

    for(let i=0; i < users.length; i++){
        if(users[i].email == req.body.email && users[i].password == req.body.upwd){
            customer.valid = true;
        }
    }
    console.log(JSON.stringify(customer))
 
});

//Task 4
app.post('/api/login', function(req, res) {
    if(!req.body){
        return res.sendStatus(400);
    }
    console.log('Got body:', req.body);

    //Creating a customer
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    
    //Check if user exists with these credentials
    for(let i=0; i < users.length; i++){
        if(users[i].email == req.body.email && users[i].password == req.body.upwd){
            customer.valid = true;
        }
    }
    res.send(customer); 
});

