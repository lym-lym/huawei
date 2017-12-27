$(function(){
	//手机端的nav导航
	$(".more").click(function(){
		$(".more_item").css("right","0px")
		$(".warp").css("left"," -100%")
	})
	$(".close").click(function(){
		$(".more_item").css("right"," -103%;")
		$(".warp").css("left","0")
	});
	//手机端下拉菜单
	$(".more_item li").click(function(){
		if ($(this).hasClass('on')) {
			$(this).children(".list").slideUp(); 
			$(this).removeClass("on"); 
		}else{
			$(".more_item li.hasmore").removeClass("on"); 
			$(".more_item li.hasmore .list").slideUp();
			$(this).children(".list").slideDown();
			$(this).toggleClass("on");
		}
	
	});
	//banner上出现左右按钮
	$(".index_banner").mouseenter(function(){
		$(".bnt").css("display","block")
	}).mouseleave(function(){
		$(".bnt").css("display","none")
	})
	
	if(screen.width<414){
		TouchSlide({ //手机端的banner图
				slideCell:"#index_banner",
				titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
				mainCell:".bd ul", 
				effect:"leftLoop", 
				autoPlay:true,//自动播放
				autoPage:true, //自动分页
				//switchLoad:"_src" //切换加载，真实图片路径为"_src" 
		});
	}else{//pc站的banner图
		$(".index_banner").slide({titCell:".hd li",mainCell:".bd ul",effect:"leftLoop",autoPlay:true,delayTime:800,interTime:6000,mouseOverStop:false});/** autoPlay:true自动播放*/
	}
	
	//手机端下拉菜单
	$(".fooder_item li").click(function(){
		if ($(this).hasClass('on')) {
			$(this).children(".list").slideUp(); 
			$(this).removeClass("on"); 
		}else{
			$(".fooder_item li.fooder_item_hassun").removeClass("on"); 
			$(".fooder_item li.fooder_item_hassun .list").slideUp();
			$(this).children(".list").slideDown();
			$(this).toggleClass("on");
		}
	
	});
	
	//列表页面的banner
	$("#p_banner").slide({titCell:".hd li",mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:800,interTime:6000,mouseOverStop:false});/** autoPlay:true自动播放*/
	
})
		$(function(){
		    $(".btn_goTop").click(function() {
		        $("html,body").animate({scrollTop:0}, 500);
		    }); 
		})
