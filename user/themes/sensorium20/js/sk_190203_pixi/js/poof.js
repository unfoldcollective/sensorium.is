class Poof{

	constructor(width=800,height=1200,element,assetsFolder,assetNames){
		// fetch constructor parameters
		this.element = element;
		this.assetsFolder = assetsFolder;
		this.assetNames = assetNames;
		// dimenions are static as they are referenced by each particle
		Poof.width 	 = width;
		Poof.height  = height;
		// set it all up
		this.initPIXI();
	}

	initPIXI(){
		// aim for WebGL renderer, otherwise fallback on canvas
		let type = "WebGL"
	    if(!PIXI.utils.isWebGLSupported()){
	      type = "canvas"
	    }
	    // alpha threhsold for asset sampling
	    this.minAlpha = 24;
	    // init PIXI application (sets up renderer, interaction, canvas, etc.)
	    this.app = new PIXI.Application({ 
	        width:  Poof.width,         // default: 800
	        height: Poof.height,        // default: 600
	        antialias: true,    		// default: false
	        transparent: true, 		// default: false
	        resolution: 1,      		// default: 1, retina related
	        // backgroundColor: 0xFFFFFF
	      }
	    );
	    // association of asset name to Sprite from loaded texture (.svg file)
	    this.assets = {};
	    // pixels extracted from the asset (in RGBA order)
	    this.assetPixels = [];
	    // global frame counter (used by particles)
	    Poof.frameCount = 0;
	    // index of asset currently sampled
	    this.assetIndex   = 0;
	    // all the particles will go in here
	    this.circles    = [];
	    // the container display object holding all particles
	    this.container = new PIXI.Sprite();
	    this.app.stage.addChild(this.container);
	    // add the PIXI Canvas (WebGL or otherwise) to the supplied parent element
	    this.element.appendChild(this.app.view);
	    // a normalized value to control
	    this.poofiness = 0.0;
	    // create a static reference to this instance as the scope in request animation frame gets lost
      	Poof.self = this;
      	// load assets
      	this.loadMedia();
      	// kick off update loop
      	this.app.ticker.add(delta => this.draw(delta));
	}

	draw(delta){
      // scope gotcha with request animation frame
      if(Poof.self){

  			let self = Poof.self;
  			// update circles
  			for (var i = 0; i < self.circles.length; i++) {
  		    	self.circles[i].run(self.poofiness);
  		    }
  		      
  			Poof.frameCount++;

		  }
      
    }

  loadMedia(){
  	// use PIXI pre-allocated loader
	const loader = PIXI.Loader.shared;
    	// add assets to load
    	for (let i=0; i < this.assetNames.length; i++){
      	loader.add(this.assetNames[i], this.assetsFolder + this.assetNames[i]);
    	}
    	// load each asset
    	loader.load((loader, resources) => {

	      for(let name in resources){
	      	// create a new sprite from the loaded texture
	        	this.assets[name] = new PIXI.Sprite(resources[name].texture);
            // this.assets[name].width = 720;
            // this.assets[name].height = 625;
	        	// extract pixels from rendered texture (RGBA orders)
	        	this.assetPixels[this.assetPixels.length] = this.app.renderer.plugins.extract.pixels(this.assets[name]);

	      }

	  });
    	// handle load complete, creating the mosaic
    	loader.onComplete.add(() => {
      	console.log("all assets loaded and sampled");
      	this.createMosaic();
    	});

  }

  // clear all circles (removing them from the update loop and display list (container))
  clearCircles(){
    // clear previous mosaic (if any)
    while(this.circles.length > 0){
        // retrieve the first element, removing it from the list
        let circle = this.circles.shift();
        // remove from display list
        this.container.removeChild(circle);
        // release
        circle = null;
    }
  }
  // sample pixel locations and colours to create Circle particles
  createMosaic(res=9){
    console.log("createMosaic skipping every",res,"pixels");
    
    this.clearCircles();
    
    let currentAsset  = this.assets[this.assetNames[this.assetIndex]];
    let currentPixels = this.assetPixels[this.assetIndex];
    
    let now = Date.now();
    // offset for the animation pixels - offset by (Poof.width - currentAsset.width) /2
    let offsetX = (Poof.width - currentAsset.width)/2;
    let offsetY = (Poof.height - currentAsset.height)/2;

    offsetX = Math.max( 0, offsetX ); //if asset wider, dont add negative offset
    offsetY = Math.max( 0, offsetY );

    // console.log( this.assets );
    // console.log( 'currentAsset.width ' + currentAsset.width );
    // console.log( 'currentAsset.height ' + currentAsset.height );
    // console.log( 'poof ' + Poof.width + ' x ' + Poof.height );
    // console.log( 'offsetX ' + offsetX );
    // console.log( 'offsetY ' + offsetY );


    for (let y=0; y < currentAsset.height; y += res){
      for (let x=0; x < currentAsset.width; x += res){
            // remember PIXI extract returns pixels in RGBA order( [r,g,b,a,r,g,b,a...]) (e.g. index + 0 = r, index + 1 = g, index + 2 = b, index + 3 = a)
            // hence skip every 4th array value for eahc pixel
            let pixelIndex = (x  + (y * currentAsset.width)) * 4;
    		  // alpha threshold (lower, but > 0 may include barely visible pixels which may look dark in RGB without A, higher may exclude too many artwork pixels)
            if(currentPixels[pixelIndex] + 3 > this.minAlpha){
                
                let rgb = [currentPixels[pixelIndex + 0],
                           currentPixels[pixelIndex + 1],
                           currentPixels[pixelIndex + 2]];
                // create a new circle for the given position, colour and index
                let circle = new Circle(x + offsetX, y + offsetY,  rgb, pixelIndex);
                // let circle = new Circle(x, y, rgb, pixelIndex);

                // add the circle to the list (so it can be update (and later removed))
                this.circles.push(circle);    
                // add circle to display list
                this.container.addChild(circle);
            }
        }    
    }
    console.log('created',this.circles.length,'particles in',Date.now() - now,"ms");

  }
  // (if possible) re-create the mosaic using the next available asset to sample
  next(){
  	if(this.assetIndex < this.assetNames.length - 1){
        this.assetIndex++;
        this.createMosaic();
        console.log("assetIndex",this.assetIndex);
      }
  }
  // (if possible) re-create the mosaic using the previous available asset to sample
  previous(){
  	if(this.assetIndex > 0){
        this.assetIndex--;
        this.createMosaic();
        console.log("assetIndex",this.assetIndex);
      }
  }

}

//utils from p5.js
Poof.PI = Math.PI;
Poof.TWO_PI = Poof.PI * 2;
Poof.HALF_PI = Poof.PI * 0.5;
Poof.QUARTER_PI = Poof.PI * 0.25;
Poof.CHANNEL_DIVISOR = 1.0 / 255.0;

Poof.random = function(min, max) {
  var rand;

  rand = Math.random();
  if (typeof min === 'undefined') {
    return rand;
  } else if (typeof max === 'undefined') {
    if (min instanceof Array) {
      return min[Math.floor(rand * min.length)];
    } else {
      return rand * min;
    }
  } else {
    if (min > max) {
      var tmp = min;
      min = max;
      max = tmp;
    }

    return rand * (max - min) + min;
  }
};

Poof.map = function(n, start1, stop1, start2, stop2, withinBounds) {
  var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
}

Poof.lerp = function(start, stop, amt) {
  return amt * (stop - start) + start;
};

Poof.constrain = function(n, low, high) {
  return Math.max(Math.min(n, high), low);
};

// for pixi
Poof.rgb2hex = function(r,g,b){
	return PIXI.utils.rgb2hex([r * Poof.CHANNEL_DIVISOR, g * Poof.CHANNEL_DIVISOR, b * Poof.CHANNEL_DIVISOR]);
}