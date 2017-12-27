var express = require('express');
var router = express.Router();
var usersDb = require('../db/usersDb');
/* GET home page. */
router.post('/', function(req, res, next) {
	//接收前端的数据
	let email = req.body.email;
	let userpass = req.body.password;
	let surname = req.body.surname;
	let name = req.body.name;
	
	//链接数据库
	usersDb.reg({'email':email,'userpass':userpass,'surname':surname,"name":name},function(success){
		if(success){
			//响应给前端
			res.redirect("html/login.html")
		}else{
			res.send("<script>alert('用户名已经注册');location.href='html/register.html';</script>");
		}
	});
	
});

module.exports = router;
