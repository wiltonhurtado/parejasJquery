(function(window) {
Símbolo_1 = function() {
	this.initialize();
}
Símbolo_1._SpriteSheet = new createjs.SpriteSheet({images: ["hongo.png"], frames: [[0,0,100,100,0,0,0],[100,0,100,100,0,0,0],[200,0,100,100,0,0,0],[300,0,100,100,0,0,0],[400,0,100,100,0,0,0],[500,0,100,100,0,0,0]]});
var Símbolo_1_p = Símbolo_1.prototype = new createjs.Sprite();
Símbolo_1_p.Sprite_initialize = Símbolo_1_p.initialize;
Símbolo_1_p.initialize = function() {
	this.Sprite_initialize(Símbolo_1._SpriteSheet);
	this.paused = false;
}
window.Símbolo_1 = Símbolo_1;
}(window));

