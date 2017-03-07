window.onload = function () {
var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');
var State = {
_current: 0,
INTRO: 0,
LOADING: 1,
LOADED: 2
}
window.addEventListener('click', handleClick, false);
window.addEventListener('resize', doResize, false);
doResize();
function handleClick() {
State._current = State.LOADING;
fadeToWhite();
  }
function doResize() {
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
switch (State._current) {
case State.INTRO:
showIntro ();
break;
}
}
function fadeToWhite(alphaVal) {
// ...
}
function showIntro () {
// ...
}
}
