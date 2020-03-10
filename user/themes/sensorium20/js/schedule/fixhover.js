//this is to make overlapped sections usable
// uses http://tristen.ca/hoverintent in combination with z-index

  var el = document.querySelectorAll(".cd-schedule__event");

  Array.prototype.forEach.call (el, function (node) {
      // console.log( node );
	  hoverintent(node,
	  function() {
	    // console.log( 'hover' );
	    node.classList.add("this-is-hovered");
	  }, function() {
	    // console.log( 'hover out' );
	    node.classList.remove("this-is-hovered");
	  });
  } );
