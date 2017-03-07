window.onload = function () {
var canvas = document.getElementById('game');

// Force canvas to dynamically change its size to
// the same width/height as the browser window
canvas.width = 100;
canvas.height = 100;

var c = canvas.getContext('2d');

// Fill the screen with a black background
c.fillStyle = '#000000';
c.fillRect (0, 0, canvas.width, canvas.height);

var phrase = "Click or tap the screen to start the game";
c.font = 'bold 16px Arial, sans-serif';
c.fillStyle = '#FFFFFF';
c.fillText (phrase, 10, 30);

}
