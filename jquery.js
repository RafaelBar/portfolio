$(document).ready(function(){
	$('div#onBody1').addClass('one');
    $('div#onBody5').css({'zIndex':'7'});
    $('div#onBody1').css({'zIndex':'5'});
    $('div#onBody5').addClass('five');
	$("div#firstChild a").on('mouseover',function(){
		$('div#onBody1').addClass('one');
		$('div.one').hide();
		$('div.one').fadeIn("slow");
		$('div#onBody1').css({'zIndex':'8'});
		$('div#onBody5').css({'zIndex':'7'});
		$('video#bgvid').css({'zIndex':'6'});

		//$('div#onBody6').hide();
		$('div#onBody2').hide();
		$('div#onBody3').hide();
		$('div#onBody4').hide();
	});
});

$(document).ready(function(){
	$("div#firstChild a").on('mouseleave',function(){  
		//$('div#onBody1').css({'zIndex':'1'});
		
		$('div#onBody5').addClass('five');
		$('div.five').hide();
		$('div.five').fadeIn("slow");
		$('div#onBody5').css({'zIndex':'7'});
		
		//$('video#bgvid').hide();
		$('div#onBody1').fadeOut("slow");
		$('video#bgvid').fadeIn("slow");
		$('video#bgvid').css({'zIndex':'7'});
	});
});

$(document).ready(function(){
	$('div#onBody2').addClass('two');
    $('div#onBody5').css({'zIndex':'7'});
    $('div#onBody2').css({'zIndex':'5'});
    $('div#onBody5').addClass('five');
    $('div.onBody22').css({'background-image':'ccs/op517.jpg'});
	$("div#secondChild a").on('mouseover',function(){
		$('div.onBody22').css({'background-image':'ccs/op517.jpg'});
        $('div#onBody2').addClass('two');
		$('div.two').hide();
		$('video#bgvid').css({'zIndex':'6'});
		$('div.two').fadeIn("slow");
		$('div#onBody2').css({'zIndex':'8'});
		$('div#onBody5').css({'zIndex':'7'});
		$('div#onBody1').hide();
		$('div#onBody3').hide();
		$('div#onBody4').hide();
	});
});

$(document).ready(function(){
	$("div#secondChild a").on('mouseleave',function(){
		//$('div#onBody2').css({'zIndex':'1'});
		$('div#onBody5').addClass('five');
		$('div.five').hide();
		$('div.five').fadeIn("slow");
		$('div#onBody5').css({'zIndex':'7'});
		$('div#onBody2').fadeOut("slow");
		$('video#bgvid').fadeIn("slow");
		$('video#bgvid').css({'zIndex':'7'});
	});
});

$(document).ready(function(){
	$('div#onBody3').addClass('three');
    $('div#onBody5').css({'zIndex':'7'});
    $('div#onBody3').css({'zIndex':'5'});
    $('div#onBody5').addClass('five');
	$("div#thirdChild a").on('mouseover',function(){
        $('div#onBody3').addClass('three');
		$('div.three').hide();
		$('div.three').fadeIn("slow");
		$('video#bgvid').css({'zIndex':'6'});
		$('div#onBody3').css({'zIndex':'8'});
		$('div#onBody5').css({'zIndex':'7'});
		$('div#onBody2').hide();
		$('div#onBody1').hide();
		$('div#onBody4').hide();
		
	});
});

$(document).ready(function(){
	$("div#thirdChild a").on('mouseleave',function(){
		//$('div#onBody3').css({'zIndex':'1'});
		$('div#onBody5').addClass('five');
		$('div.five').hide();
		$('div.five').fadeIn("slow");
		$('div#onBody5').css({'zIndex':'7'});
		$('div#onBody3').fadeOut("slow");
		$('video#bgvid').fadeIn("slow");
		$('video#bgvid').css({'zIndex':'7'});
	});
});

$(document).ready(function(){
	$('div#onBody4').addClass('four');
    $('div#onBody5').css({'zIndex':'7'});
    $('div#onBody4').css({'zIndex':'5'});
    $('div#onBody5').addClass('five');
	$("div#forthChild a").on('mouseover',function(){
        $('div#onBody4').addClass('four');
        $('video#bgvid').css({'zIndex':'6'});
		$('div.four').hide();
		$('div.four').fadeIn("slow");
		$('div#onBody4').css({'zIndex':'8'});
		$('div#onBody5').css({'zIndex':'7'});
		$('div#onBody2').hide();
		$('div#onBody3').hide();
		$('div#onBody1').hide();
	});
});

$(document).ready(function(){
	$("div#forthChild a").on('mouseleave',function(){
		//$('div#onBody4').css({'zIndex':'1'});
		$('div#onBody5').addClass('five');
		$('div.five').hide();
		$('div.five').fadeIn("slow");
		$('div#onBody5').css({'zIndex':'7'});
		$('div#onBody4').fadeOut("slow");
		$('video#bgvid').fadeIn("slow");
		$('video#bgvid').css({'zIndex':'7'});
	});
});

$(document).ready(function(){
	$("section.mainFrame").on('mouseover',function(){
         $('h1.name').css({"-webkit-transform":"rotate(-8deg)"});
		 $('h1.name').css({"-moz-transform":"rotate(-8deg)"});
		 $('h1.name').css({"-o-transform":"rotate(-8deg)"});
		 $('h1.name').css({"-ms-transform":"rotate(-8deg)"});
		 $('h1.name').css({"transform":"rotate(-8deg)"});
	});
});

$(document).ready(function(){
	$("section.mainFrame").on('mouseleave',function(){
         $('h1.name').css({"-webkit-transform":"rotate(-2deg)"});
		 $('h1.name').css({"-moz-transform":"rotate(-2deg)"});
		 $('h1.name').css({"-o-transform":"rotate(-2deg)"});
		 $('h1.name').css({"-ms-transform":"rotate(-2deg)"});
		 $('h1.name').css({"transform":"rotate(-2deg)"});
	});
});
/*
$(document).ready(function(){
	setTimeout(function(){
    $('div.one').addClass('zout');
    },1);
});*/