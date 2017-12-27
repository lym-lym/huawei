const mongoose = require("mongoose");
const dbconn = require("./dbconn")();

//定义一个schema(模板)：表结构 
var userSchema = new mongoose.Schema({
	email:String,
	userpass:String,
	surname:String,
	name:String
});
var usersModel = dbconn.model("users",userSchema);


module.exports = {
	add:function(data,callback){
		var userEntity = new usersModel(data);
		userEntity.save((err,data)=>{
			if(err){
				console.log(err);
				callback(false);
			}else{
				callback(true);
			}
		})
	},
	find:function(condition,callback){
        usersModel.find(condition,(err,data)=>{
            if(err){
                console.log(err);
                callback([]);
            }else{
            	console.log(data.length)
            	callback(data)
            }
        });
    },
    reg:function(data,callback){
    	let this1 = this;
    	//先查找该用户名是否存在
    	this.find({"email":data.email},function(userinfo){
    		if(userinfo.length == 0){
    			this1.add(data,function(success){
    				callback(success);
    			});
    			
    		}else{
    			callback(false);
    		}
    	})
    }
}
