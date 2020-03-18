import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

///////////////////////////////////////////
// body class on menu open / close
///////////////////////////////////////////
$(document).on( 'opened.zf.offCanvas', function() {
	// console.log( 'menu opened' );
	$('body').addClass('menu-opened');
} );

$(document).on( 'closed.zf.offCanvas', function() {
	// console.log( 'menu closed' );
	// $('body').addClass('menu-closed');
	$('body').removeClass('menu-opened');
} );

///////////////////////////////////////////
// Fixed menu on window scroll
///////////////////////////////////////////
var windowHeight = $(window).height(); 

var windowScrolledBodyClass = debounce( function() {
	console.log( $(window).scrollTop() + ' ' + windowHeight/3 );
	if( $(window).scrollTop() >= windowHeight/3 ) {
		$( 'body' ).addClass( 'window-scrolled' );
	} else {
		$( 'body' ).removeClass( 'window-scrolled' );		
	}
}, 50, false );

var refreshWindowHeight = debounce( function() {
	windowHeight = $(window).height();
	// console.log( 'refreshed windown height ' + windowHeight );
}, 300, true );

jQuery(document).ready(function($) {
	$(window).on( 'scroll', windowScrolledBodyClass );
	$(window).on( 'resize', refreshWindowHeight );
});

///////////////////////////////////////////
// Close menu on navigation link click
///////////////////////////////////////////
$('.off-canvas .navigation a').on( 'click', function() {
	$('.off-canvas').foundation('close');
});

jQuery(document).ready(function($) {
	var elem = new Foundation.SmoothScroll($('.off-canvas .navigation'));
});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};