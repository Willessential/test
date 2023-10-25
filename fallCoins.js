(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"fallCoins_atlas_1", frames: [[0,0,541,219],[0,375,401,128],[0,221,498,152],[500,302,305,219],[403,375,74,145],[543,0,300,300],[0,505,319,157]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["fallCoins_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["fallCoins_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["fallCoins_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["fallCoins_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["fallCoins_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["fallCoins_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["fallCoins_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.winnerT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.winnerT, new cjs.Rectangle(0,0,270.5,109.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(24.4,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(0,1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,249,77), null);


(lib.lostT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lostT, new cjs.Rectangle(0,0,152.5,109.5), null);


(lib.coin1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(56.55,38.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin1, new cjs.Rectangle(0,0,150,150), null);


// stage content:
(lib.fallCoins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		stage.enableMouseOver()
		let root = this;
		let score = 0;
		this.score.text = score;
		let myCoins = [this.coin1,this.coin2,this.coin3,
		this.coin4,this.coin5,this.coin6];
		
		function init() {
			root.winner.visible=false;
			root.lost.visible=false;
			root.btnAgain.visible=false;
		}
		init()
		
		//reset coins position---------------------
		function coinsReset () {
			let myX1 = 100;
			let myX2 = 300;
			
			myCoins[0].x =myX1;
			myCoins[0].y =-100;
			
			myCoins[1].x =myX2;
			myCoins[1].y =-400;
			
			myCoins[2].x =myX1;
			myCoins[2].y =-700;
			
			myCoins[3].x =myX2;
			myCoins[3].y =-1000
			
			myCoins[4].x =myX1;
			myCoins[4].y =-1300;
			
			myCoins[5].x =myX2;
			myCoins[5].y =-1700
			
		}
		coinsReset ()
		//reset coins position************************
		
		//falling coins----------------------------
		this.addEventListener("tick", fallCoinsF.bind(this));
		
		function fallCoinsF()
		{
			//this.coin1.y+=10;
			for(let i =0; i<6; i++) {
				myCoins[i].y+=10;
			}
			winOrLost ()
			
		}
		//falling coins-*************************
		
		for(let i = 0; i<6; i++) {
			myCoins[i].addEventListener("mouseover", function () {
				myCoins[i].visible=false;
				score++
				root.score.text = score;
		}	)
		}
		
		/// win or lost ----------------------------
		function winOrLost () {
			if(myCoins[5].y> 900) {
				
			
			
			if(score===6) {
				root.winner.visible=true;
				root.btnAgain.visible=true;
			} else {
				root.lost.visible=true;
				root.btnAgain.visible=true;
				
			}}
		}
		/// win or lost *****************************
		
		
		
		this.btnAgain.addEventListener("click", playAgain);
		
		function playAgain () {
			score=0;
			root.score.text = score;
			init()
			coinsReset ()
			
			myCoins[0].visible=true;
			myCoins[1].visible=true;
			myCoins[2].visible=true;
			myCoins[3].visible=true;
			myCoins[4].visible=true;
			myCoins[5].visible=true;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.score = new cjs.Text("0", "bold 62px 'Roboto'", "#333333");
	this.score.name = "score";
	this.score.lineHeight = 76;
	this.score.lineWidth = 100;
	this.score.parent = this;
	this.score.setTransform(218,669.8);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(29.4,650.8,0.5,0.5);

	this.btnAgain = new lib.Symbol1();
	this.btnAgain.name = "btnAgain";
	this.btnAgain.setTransform(200,484.5,1,1,0,0,0,124.5,38.5);

	this.lost = new lib.lostT();
	this.lost.name = "lost";
	this.lost.setTransform(200,316,1,1,0,0,0,76.1,54.8);

	this.winner = new lib.winnerT();
	this.winner.name = "winner";
	this.winner.setTransform(200,206,1,1,0,0,0,135.2,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.winner},{t:this.lost},{t:this.btnAgain},{t:this.instance},{t:this.score}]}).wait(1));

	// coins
	this.coin6 = new lib.coin1();
	this.coin6.name = "coin6";
	this.coin6.setTransform(161,-115,1,1,0,0,0,75,75);

	this.coin5 = new lib.coin1();
	this.coin5.name = "coin5";
	this.coin5.setTransform(-351,-2,1,1,0,0,0,75,75);

	this.coin4 = new lib.coin1();
	this.coin4.name = "coin4";
	this.coin4.setTransform(437,-198,1,1,0,0,0,75,75);

	this.coin3 = new lib.coin1();
	this.coin3.name = "coin3";
	this.coin3.setTransform(-147,-159,1,1,0,0,0,75,75);

	this.coin2 = new lib.coin1();
	this.coin2.name = "coin2";
	this.coin2.setTransform(706,-79,1,1,0,0,0,75,75);

	this.coin1 = new lib.coin1();
	this.coin1.name = "coin1";
	this.coin1.setTransform(925,-115,1,1,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.coin1},{t:this.coin2},{t:this.coin3},{t:this.coin4},{t:this.coin5},{t:this.coin6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-226,127,1226,619.2);
// library properties:
lib.properties = {
	id: '6F043112CA00F042B295C5288E7548B1',
	width: 400,
	height: 800,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/fallCoins_atlas_1.png", id:"fallCoins_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6F043112CA00F042B295C5288E7548B1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;