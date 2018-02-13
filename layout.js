$(window).on('load resize', function(){
    if ($(window).width() < 992) {
   		$(".btn-group-vertical").addClass("btn-group btn-group-lg");
   		$(".btn-group-vertical").removeClass("btn-group-vertical");
		$(".leftPropNav .glyphicon").css({"padding": "1px", "font-size": "1.4em"});
		$(".leftPropNav .icomoon").css({"padding": "1px", "font-size": "1.5em",});
	}
	else {
		$(".btn-group").addClass("btn-group-vertical");
   		$(".btn-group-vertical").removeClass("btn-group btn-group-lg");
		$(".leftPropNav .glyphicon").css({"padding": "", "font-size": ""});
		$(".leftPropNav .icomoon").css({"padding": "", "font-size": ""});
	}
});