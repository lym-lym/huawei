var express = require('express');
var router = express.Router();
var usersDb = require('../db/usersDb');
/* GET home page. */
router.post('/', function(req, res, next) {
	//接收前端的数据
	let email = req.body.email;
	let userpass = req.body.userpass;
	console.log(req.body.email)
	//链接数据库
	usersDb.find({'email':email,'userpass':userpass},function(data){
		if(data.length ==0){
			res.send("<script>alert('用户名或者密码错误');location.href='html/login.html';</script>");
        }else{
            //保存session
            req.session.username = email;
            //保存cookie
            res.cookie("username",email);
            //跳转到首页
            res.redirect("index.html");
        }
		
	});
	
});

module.exports = router;
