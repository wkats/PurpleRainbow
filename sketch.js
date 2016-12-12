var colorBG ={r:0xE0,g:0x66,b:0xFF};
var colorDrop = {r:138,g:46,b:26};

var nDrops = 400;
var drops = [nDrops];

function setup(){
	createCanvas(460,320);
	for (var i = 0; i < nDrops; i++) {
		drops[i] = new Drop();
	}
}

function draw(){
	background(colorBG.r,colorBG.g,colorBG.b);
	for (var i = drops.length - 1; i >= 0; i--) {
		drops[i].show();
		drops[i].update();
	}
}