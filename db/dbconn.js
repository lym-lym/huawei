const mongoose = require("mongoose");
//创建数据库链接
module.exports =function(){
	return mongoose.createConnection("localhost","huawei");
};
