var express=require('express');
var router = express.Router();
var userModel=require('../models/user');

router.get('/',function (req,res){
    res.render('login/index');
});

router.post('/', function (req,res){
    var user={
        username:req.body.username,
        password:req.body.password
    };
    userModel.validate(user,function (results) {
        if(results!=false){
            req.session.user_id=results[0].id;
            req.session.username=results[0].username;
            req.session.password=results[0].password;
            req.session.user_type=results[0].user_type;
            if(req.session.user_type=="admin"){
                res.redirect('/admin');
            }
            else if(req.session.status=="employee"){
                res.redirect('/employee');
            }
            else {

            }
        }
    });
});



module.exports=router;
