(function() {
    function init() {
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
            var tiltSettings = {
                movement: {
                    imgWrapper : {
                        translation : {x: 10, y: 10, z: 30},
                        rotation : {x: 0, y: -10, z: 0},
                        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                    },
                    lines : {
                        translation : {x: 10, y: 10, z: [0,70]},
                        rotation : {x: 0, y: 0, z: -2},
                        reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
                    },
                    caption : {
                        rotation : {x: 0, y: 0, z: 2},
                        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                    },
                    overlay : {
                        translation : {x: 10, y: -10, z: 0},
                        rotation : {x: 0, y: 0, z: 2},
                        reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
                    },
                    shine : {
                        translation : {x: 100, y: 100, z: 0},
                        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                    }
                }
            };
            new TiltFx(el, tiltSettings);
        });
    }

    // Preload all images.
    imagesLoaded(document.querySelector('#section-speakers'), function() {
        document.body.classList.remove('loading');
        init();
    });
})();
