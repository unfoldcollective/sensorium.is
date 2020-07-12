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

var lazyLoadInstance;

jQuery(document).ready(function($) {
	///////////////////////////////////////////
	// lazyload
	///////////////////////////////////////////
	lazyLoadInstance = new LazyLoad({
	  elements_selector: ".lazy"
	});

	///////////////////////////////////////////
	// indicate javascript working
	///////////////////////////////////////////
	$('html').removeClass( 'no-js' );
});


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
///////////////////////////////////////////
// Programme
///////////////////////////////////////////
let eventClass = '.js-eventgrid-event', //event box
	contentClass = '.js-event-content', //content to be revealed
	closeEventClass = '.js-event-close', //event close button
	expandClass = 'js-event-expanded', //reveal boxes (that should be removed)
	openedClass = 'eventgrid__event--opened',
	eventContentToReveal = '',
	nextInRow = [],
	cloned = '';

jQuery(document).ready(function($) {
	//on click na event
	$(eventClass).on( 'click', function( e ) {
		var $this = $( this );
		
		// remove all
		closeExpanded();
		
		nextInRow = $this.nextAll();

		// add --opened class to show the dot
		removeOpenedFromEvent();
		addOpened( $this );
		
		// take event content, find three closest (because of 3 col grid) & put content behind them
		// mark these for removal after any other event clicked - expandClass;
		eventContentToReveal = $this.find( contentClass ).children(); //children() or .contents()
		cloned = eventContentToReveal.clone().addClass( expandClass );
		$this.after( cloned.get(0) ); 

		$.each( nextInRow, function( i, item ) {
			if ( i > 1 ) { 
				return false;
			}
			cloned = eventContentToReveal.clone().addClass( expandClass );
			item.after( cloned.get(0) );
		});

		// lazy load image
		lazyLoadInstance.update();

		// allow smooth scroll to event after closing expanded
		var elem = new Foundation.SmoothScroll( $( closeEventClass ) );
		// on close 1. remove opened class 2. animate content closing 3. remove all contents
		$(closeEventClass).on( 'click', function( e ) {
			removeOpenedFromEvent();
			// remove all
			closeExpanded();
		});
	});
});

function addOpened( $this ) {
	$this.addClass( openedClass );
}

function removeOpenedFromEvent() {
	$('.' + openedClass).removeClass( openedClass );
}

function closeExpanded() {
	var expandedContents = $( '.' + expandClass );
	$.each( expandedContents, function() {
		$(this).remove();
	});
}

