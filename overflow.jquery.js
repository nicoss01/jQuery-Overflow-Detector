(function ( $ ) {
	$.fn.overflowDiff ="";
	$.fn.overflowOld ="";
    $.fn.overflow = function(fn) {
        this.each(function() {
			console.log($(this).innerHeight(),$(this).height());
			$(this).css("overflow","hidden");
			var el = $("<div class='editor'></div>").appendTo($(this)).height($(this).height()).width($(this).width()+50).css("overflow-y","scroll");
			$("<div class='innerEditor' contentEditable='true'></div>").appendTo(el).width($(this).width()).height($(this).height());
			$(el).on("keydown",function(e){
				$.fn.overflowOld = $(this).html();
			})
			.on("keyup",function(e){
				$.fn.overflowDiff = $(this).html().replace($.fn.overflowOld,"");
			})
			.on("scroll",function(e){
				e.preventDefault();
				$(this).scrollTop(0);
				fn($.fn.overflowDiff);
			});      
        });
        return this;
    };
}( jQuery ));
