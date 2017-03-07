window.onload = function () {
var canvas = document.getElementById('game');

// Force canvas to dynamically change its size to

var c = canvas.getContext('2d');

c.fillStyle = '#000000';
c.fillRect (0, 0, 20, 20);

var phrase = "Click or tap the screen to start the game";
c.font = 'bold 16px Arial, sans-serif';
c.fillStyle = '#FFFFFF';
c.fillText (phrase, 10, 30);

}
