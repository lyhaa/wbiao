$(".page-list li").click(function(){
	var delay = 0.05, init=1;
	var li_ind = $(this).index();
	var li_ind_prev = $(".active").index();
	var li_length = $(this).length;
	var li_diff = li_ind - $(".active").index();
	var dur = Math.abs(li_diff)
	var left_pos = $(this).position().left+7;
	$("#from-move").css({"left":left_pos});
	
	if(li_diff>0){
		for(i = li_ind_prev; i<li_ind;i++){
			dur = delay*init;
			$("#page-list").find("li").eq(i).addClass("animate-right").css({"animation-delay":dur+"s"});
			init = init+1;
		}
	}
	else{
		for(i = li_ind_prev; i>li_ind;i--){
			dur = delay*init;
			$("#page-list").find("li").eq(i).addClass("animate-left").css({"animation-delay":dur+"s"});
			init = init+1;
		}
	}
	$("#from-move").addClass("animate");

	$("#page-list li").removeClass("active");
	$(this).addClass("active");

	$("#from-move").bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(){
		$("#from-move").removeClass("animate");
		$("#from-move").unbind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend");
	});
	$(".page-list li").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		$(".page-list li").removeClass("animate-right").removeAttr("style");
		$(".page-list li").removeClass("animate-left").removeAttr("style");
		$("#page-list li").unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
	});
	console.log($(this).index())
})