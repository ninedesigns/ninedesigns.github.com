// JavaScript Document
$(document).ready(function() {

var w1 = jQuery(window).width();
//alert('Width: '+(w1-16));


var stickyNavTop = $('.header').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
    $('.header').addClass('sticky');  
} else {  
    $('.header').removeClass('sticky');   
}  
};  
  
stickyNav();  
$(window).scroll(function() {  
    stickyNav();
});  



/* Top Menu Navigation Animation Start */
$('.item').hover(
	function(){
		var $this = $(this);
		expand($this);
	},
	function(){
		var $this = $(this);
		collapse($this);
	}
);
function expand($elem){
	var angle = 0;
	var t = setInterval(function () {
		if(angle == 1440){
			clearInterval(t);
			return;
		}
		angle += 40;
		$('.link',$elem).stop().animate({rotate: '+=-40deg'}, 0);
	},5);
	$elem.stop().animate({width:'180px'}, 500)
	.find('.item_content').fadeIn(100,function(){
		$(this).find('p').stop(true,true).fadeIn(200);
	});
}
function collapse($elem){
	var angle = 1440;
	var t = setInterval(function () {
		if(angle == 0){
			clearInterval(t);
			return;
		}
		angle -= 40;
		$('.link',$elem).stop().animate({rotate: '+=40deg'}, 0);
	},5);
	$elem.stop().animate({width:'56px'}, 500)
	.find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();
}
/* Top Menu Navigation Animation Ends */


/* Smooth Scroll Start */
//scroll	 
		 
$(function() {
function filterPath(string) {
return string
.replace(/^\//,'')
.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
.replace(/\/$/,'');
}

var locationPath = filterPath(location.pathname);
var scrollElem = scrollableElement('html', 'body');

// Any links with hash tags in them (can't do ^= because of fully qualified URL potential)
$('a[href*=#]').each(function() {

// Ensure it's a same-page link
var thisPath = filterPath(this.pathname) || locationPath;
if (  locationPath == thisPath
&& (location.hostname == this.hostname || !this.hostname)
&& this.hash.replace(/#/,'') ) {

// Ensure target exists
var $target = $(this.hash), target = this.hash;
if (target) {

// Find location of target
var targetOffset = $target.offset().top;
$(this).click(function(event) {

// Prevent jump-down
event.preventDefault();

// Animate to target
$(scrollElem).animate({scrollTop: targetOffset}, 800, function() {

// Set hash in URL after animation successful
location.hash = target;

});
});
}
}

});

// Use the first element that is "scrollable" (cross-browser fix?)
function scrollableElement(els) {
for (var i = 0, argLength = arguments.length; i <argLength; i++) {
var el = arguments[i],
$scrollElement = $(el);
if ($scrollElement.scrollTop()> 0) {
return el;
} else {
$scrollElement.scrollTop(1);
var isScrollable = $scrollElement.scrollTop()> 0;
$scrollElement.scrollTop(0);
if (isScrollable) {
return el;
}
}
}
return [];
}

});

/* Smooth Scroll End */



});