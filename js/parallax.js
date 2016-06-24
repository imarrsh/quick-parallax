$(document).ready(function(){

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();
		var heroOffset = $('.hero-title').offset().top;

		function maxBlur(blur){
			blur = (blur > 8) ? 8 : blur;
			return blur;
		}
		var heroH = $('.hero').height();
		var titleH = $('.hero-title').height();
		var scrollMultiplier = (heroH/titleH)/12;

		if(wScroll < heroH) {
			$('.hero-img').css({
				'transform' : 'translate(0px, -'+ (wScroll/4) +'px) translateZ(0)',
				'-webkit-filter' : 'blur('+ maxBlur(wScroll/30) +'px)'
			});
			$('.hero-title').css({
			'transform' : 'translate(-50%, ' + (wScroll*scrollMultiplier - 50) +'%)', // 1: 0.68, 2: 0.326, 3: 0.225
			'color' : 'rgba(256, 256, 256, ' + (wScroll-600)/-600 +')',
			'-webkit-filter' : 'blur('+ maxBlur(wScroll/30) +'px)'
		});
		}
	});
});

//(wScroll*0.68 - 50)
// 3 lines: h = 225px
// 2 lines: h = 150px
// 1 line: 	h = 75px
