// create the instance passing the dimenions, container, assets folder (including trailing slash) and asset names
    let assetpath = './user/themes/imaginarious/js/sk_190203_pixi/assets/SVG/';
    let canvasParent = document.getElementById('bg-canvas');
    let assetNames = ["Icelolly-1.svg","Icelolly-2.svg","Icelolly-3.svg"];

    const poof = new Poof( 800, 1200, canvasParent, assetpath, assetNames );
    
    // handle scroll event on desktop and touch move on mobile
    document.addEventListener("scroll",updatePoofinessDesktop,false);
    document.addEventListener("touchmove", updatePoofinessMobile, false);
    // transition using window scroll Y position (in relation to the window)
    function updatePoofinessDesktop(e){
      e.preventDefault();
      poof.poofiness = Poof.constrain(window.scrollY / (Poof.height - window.innerHeight),0.0,1.0);
    }
    // transition using the first touch Y position (in relation to the window)
    function updatePoofinessMobile(e){
      poof.poofiness = Poof.constrain(e.touches[0].clientY / window.innerHeight,0.0,1.0);
    }
    // keyboard shortcuts to test previous and next assets
    document.addEventListener('keydown',(e) =>{
      e.preventDefault();
      // A or LEFT key
      if (e.keyCode === 65 || e.keyCode === 37) {
        poof.previous();
      }
      // D or RIGHT key
      if (e.keyCode === 68 || e.keyCode === 39) {
        poof.next();
      }
    });