jQuery(document).ready(function($) {
	///////////////////////////////////////////
	// Programme masonry grid
	///////////////////////////////////////////
	$('.eventgrid').masonry({
	  // options
	  itemSelector: '.eventgrid__item',
	  columnWidth: '.eventgrid__sizer',
	  percentPosition: true
	});

	let $event = $('.js-eventgrid-event');
	console.log( $event );

	$event.on( 'click', function( e ) {
		let $this = $( this );
		console.log( $this.next( '.js-event-content' ) );

		$this.next( '.js-event-content' ).toggleClass('visible');
	})
});