const mongoose = require("mongoose");
const dbconn1 = require("./dbconn");
module.exports = {
	findAll:function(callback){//查询所有
        let dbconn = dbconn1();
		//定义一个schema(模板)：表结构 
		var goodsSchema = new mongoose.Schema({
			goodsId:String,//和数据库中的字段名一致
			goodsName:String,
			goodsPrice:Number
		});
		var goodsModel = dbconn.model("goods",goodsSchema);

        //3）、查询
        goodsModel.find({},function(err,data){
            if(err){
                console.log(err);
                callback(false);
            }else{
            	callback(data)
            }
        });
    }
}
