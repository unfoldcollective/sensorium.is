// event key_handler function
var controls = document.querySelector('.slides-controls');
var currentSlideIndex = 1;
var slides = document.querySelectorAll('.slide');


function key_handler(e) {
    var key = window.event ? e.keyCode : e.which;
    if (key >= 65 && key <= 90) {
        controls.classList.toggle('dn');
    }
    else if (key >= 48 && key <= 57) {
      set_current_slide(key - 48);
    }
    else if (key == 37) {
      // left arrow
      prev_slide();
    }
    else if (key == 38) {
      // up arrow
      next_slide();
    }
    else if (e.keyCode == 39) {
      // right arrow
      next_slide();
    }
    else if (e.keyCode == 40) {
      // down arrow
      prev_slide();
    }
}
// attach handler to the keydown event of the document
if (document.attachEvent) document.attachEvent('onkeydown', key_handler);
else document.addEventListener('keydown', key_handler);

function set_current_slide(slideIndex) {
  // hide old
  document.querySelector('.slide.index' + currentSlideIndex).classList.add('dn');
  // update index
  currentSlideIndex = slideIndex;
  // show new
  document.querySelector('.slide.index' + currentSlideIndex).classList.remove('dn');
}

function next_slide() {
  // hide old
  document.querySelector('.slide.index' + currentSlideIndex).classList.add('dn');
  // update index
  currentSlideIndex += 1;
  if (currentSlideIndex == slides.length) {
    currentSlideIndex = 0;
  }
  // show new
  document.querySelector('.slide.index' + currentSlideIndex).classList.remove('dn');
}

function prev_slide() {
  // hide old
  document.querySelector('.slide.index' + currentSlideIndex).classList.add('dn');
  // update index
  currentSlideIndex -= 1;
  if (currentSlideIndex == -1) {
    currentSlideIndex = slides.length - 1;
  }
  // show new
  document.querySelector('.slide.index' + currentSlideIndex).classList.remove('dn');
}


/// display current slide ///
// hide all
slides.forEach(function(slide) {
  slide.classList.add('dn');
});
// show currentSlideIndex
document.querySelector('.slide.index' + currentSlideIndex).classList.remove('dn');