// create the instance passing the dimenions, container, assets folder (including trailing slash) and asset names
    let assetpath = './user/themes/imaginarious/js/sk_190203_pixi/assets/SVG/';
    let assetNames = ["Icelolly-1.svg","Icelolly-2.svg","Icelolly-3.svg"];
    let canvasParent = document.getElementById('bg-canvas');

    let $scrollElem = $('#sb-site');
    let $heightElem = $('#body');
    let windowHeight = $(window).height();
    let windowWidth = $(window).width();
    let pageHeight = $heightElem.height();
    let poofSpeed = 1.5;

    console.log( windowWidth + ' × ' + windowHeight );
    console.log( pageHeight );

    const poof = new Poof( windowWidth, windowHeight, canvasParent, assetpath, assetNames );

    // handle scroll event on desktop and touch move on mobile
      // window.addEventListener("scroll",updatePoofinessDesktop,false);
      // window.addEventListener("touchmove", updatePoofinessMobile, false);  

    jQuery(document).ready(function($) {

      $scrollElem.on( 'scroll', updatePoofinessDesktop );
      $scrollElem.on( 'touchmove', updatePoofinessMobile );

    });

    // transition using window scroll Y position (in relation to the window)
    function updatePoofinessDesktop(e){
      // e.preventDefault();
      poof.poofiness = Poof.constrain($scrollElem.scrollTop() / pageHeight*poofSpeed,0.0,1.0);
      // console.log( 'poofiness ' + poof.poofiness );
      // console.log( 'scrolltop ' + $scrollElem.scrollTop() );
      // console.log( 'innerheight ' + windowHeight );
    }

    // transition using the first touch Y position (in relation to the window)
    function updatePoofinessMobile(e){
      poof.poofiness = Poof.constrain(e.touches[0].clientY / window.innerHeight,0.0,1.0);
    }

    // keyboard shortcuts to test previous and next assets
    document.addEventListener('keydown',(e) =>{
      // A or LEFT key
      if (e.keyCode === 65 || e.keyCode === 37) {
        e.preventDefault();
        poof.previous();
      }
      // D or RIGHT key
      if (e.keyCode === 68 || e.keyCode === 39) {
        e.preventDefault();
        poof.next();
      }
    });