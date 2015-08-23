//js for all

$(document).ready(function(){

  
 /* var pathname = location.pathname.split('/').slice(-1)[0];
  if(pathname == "index.html")
  {
	  setTimeout(
  function() 
  {	
  $('div#wrapper').fadeIn(500);
  $('h1.name2').css({'display':'none'});
  $('h4.underName2').css({'display':'none'});
  }, 3000);
	$('h1.name2').css({'fontSize':'70px'});
	$('h1.name2').css({'-webkit-transform':'rotate(-2deg)'});
	$('h1.name2').css({'-moz-transform':'rotate(-2deg)'});
	$('h1.name2').css({'-o-transform':'rotate(-2deg)'});
	$('h1.name2').css({'transform':'rotate(-2deg)'});
	$('h1.name2').css({'marginTop':'325px'});
	$('h4.underName2').css({'fontSize':'1em'});
	$('h4.underName2').css({'marginTop':'447px'}); 
  }
   else{
	   $('div#wrapper').fadeIn(2000);
   }*/
   $('div.onBody22').css({'background-image':'ccs/op517.jpg'});
  $('div#wrapper').fadeIn(2000);
  //$('div.img').css({'display':'block'});
  
});

  
 
$(document).ready(function(){
	$("div#firstChild a").on('click',function(){
                      $('h4.curve').css({"display":"block"});
					  $('section.circle').css({"display":"block"});
                      $('h1.name').css({"display":"block"});
                      $('section.allStars').css({"display":"block"});
                      $('section.test').css({"display":"block"});
	});
});

$(document).ready(function(){
	$('div.onBody22').css({'background-image':'ccs/op517.jpg'});
	$("div#secondChild a").on('click',function(){
                     // $('div.onBody211').css({'background-image':'ccs/517.jpg'});
	});
});

$(document).ready(function(){
	$("div#thirdChild a").on('click',function(){
                      $('div.onBody311').css({'background-image':'ccs/op71.jpg'});
	});
});

$(document).ready(function(){
	$("h1.responsive-menu").on('click',function(){
					   $('section.dropDownMenu').css({"display":"block"});
					   $('section.dropDownMenu').css({"height":"100vh"});
	                   $(this).css({"visibility":"hidden"});
                       $('h1.responsive-menu2').css({"display":"block"});
					   $('div.dropWrapper').css({"display":"block"});
					   $('div.dropWrapper').css({"height":"100vh"});
					   $('.dropWrapper a').css({"display":"block"});
					   $('.dropWrapper a').hide();
					   $('.dropWrapper a').fadeIn("slow");
				       $('div.menuLine').css({"display":"block"});
	});
});

$(document).ready(function(){
	$("h1.responsive-menu2").on('click',function(){
					  $('section.dropDownMenu').css({"height":"0vh"});
					  $('h1.responsive-menu').css({"visibility":"visible"});
                      $('h1.responsive-menu2').css({"display":"none"});
					  $('div.dropWrapper').css({"display":"none"});
					  $('.dropWrapper a').fadeOut("slow");
					  //$('.dropWrapper a').css({"display":"none"});
				      $('div.menuLine').css({"display":"none"});

	});
});

$(document).ready(function(){
					//  $('div.onBody211').addClass('onBody22');
					$('div.onBody22').css({'opacity':'1'});
					$('div.onBody33').css({'opacity':'1'});
					
});

