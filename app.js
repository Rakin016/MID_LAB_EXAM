var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var login = require('./controllers/login');
var logout =require('./controllers/logout');
var admin =require('./controllers/admin');
var addEmployee =require('./controllers/addEmployee');
var allEmpList =require('./controllers/allEmpList');


//var fileUpload=require('express-fileupload');
var app 		= express();

//config
app.set('view engine', 'ejs');




//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use(coockieParser());
app.use('/assets', express.static('assets'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/popper',express.static('node_modules/popper.js/dist'));
app.use('/img',express.static('assets/img'));
app.use('/js',express.static('assets/js'));


app.use('/logout',logout);
app.use('/login',login);
app.use('/admin',admin);
app.use('/addEmployee',addEmployee);
app.use('/allEmpList',allEmpList);

app.get('/', function(req, res){
    res.redirect('/login');
});

app.listen(3000, function(){
    console.log('express http server started at...3000');
});
