window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });   
};

function log(from , msg) {
	console.log('!' + from + ' says ' + msg + '!');
}

//The vars
var engine,
canvas,
scene;

//The main init function
function init() {
	engine = initEngine();
}

function initEngine() {
	canvas = document.getElementById('screen');
	log(canvas, " found");
	var engine = new BABYLON.Engine(canvas, true);
	return engine;
}

function createScene() {
	  scene = new BABYLON.Scene(engine);
	  engine.runRenderLoop(loop);
	}

//main loop function
function loop() {
	scene.render();
	
}