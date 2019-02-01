// JavaScript Document

var $body = $('body');
var $btnMobileMenu = $('.btn-mobile-menu');
var $aboutBtn = $('.aboutbtn');

// removes the show-mobile-menu class on page load...
$body.removeClass('show-mobile-menu');

// click event handler for the mobile menu button
$btnMobileMenu.click(function(){

	// toggle the show-mobile-menu class
	// on the body element
	$body.toggleClass('show-mobile-menu');

}); // end click event handler for the mobile menu button

$aboutBtn.click(function(){

	// toggle the show-mobile-menu class
	// on the body element
	$body.toggleClass('show-mobile-menu');

}); // end click event handler for the mobile menu button
