// amount of tiles w*h
const rows = 15;
const cols = 15;
// image
const img = new Image();
img.onload = start;
img.src = "images/test.jpg";

let sorting = false;
let speed = 25;
let obj = null;

// TODO: this start function is very hardcoded.. i would like to make it more dynamic. Perhaps creating amount of sorting objects based on
// how many were defined in the index.html.
function start() {
  obj = new SortObject(document.getElementById("canvas1"), null, null, 0);
  obj.context = obj.canvas.getContext("2d");
  obj.pieces = CreateBoard(rows, cols);
  obj.pieces = Shuffle(obj.pieces);

  RefreshBoard(obj);
}

// DOM controller functions

// Reset resets the canvases to random tiles again
function Reset() {
  obj.pieces = Shuffle(obj.pieces);
  RefreshBoard(obj);
}

// Changes the speed of sorts
function ChangeSpeed(val) {
  speed = val;
}

// Calls sort on each SortObject depending on sort type
function Sort() {
  BubbleSort(obj);
  //RefreshBoard(obj);
}
