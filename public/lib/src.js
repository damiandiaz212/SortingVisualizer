// amount of tiles w*h
const rows = 15;
const cols = 15;
// image
const img = new Image();
img.onload = start;
img.src = "images/test.jpg";

let sortObjects = [];
let sorting = false;
let speed = 250;

// TODO: this start function is very hardcoded.. i would like to make it more dynamic. Perhaps creating amount of sorting objects based on
// how many were defined in the index.html.
function start() {
  sortObjects.push(
    new SortObject(document.getElementById("canvas1"), null, null, 0)
  );
  sortObjects.push(
    new SortObject(document.getElementById("canvas2"), null, null, 0)
  );
  sortObjects[0].context = sortObjects[0].canvas.getContext("2d");
  sortObjects[0].pieces = CreateBoard(rows, cols);
  sortObjects[0].pieces = Shuffle(sortObjects[0].pieces);

  sortObjects[1].context = sortObjects[1].canvas.getContext("2d");
  sortObjects[1].pieces = CreateBoard(rows, cols);
  sortObjects[1].pieces = Shuffle(sortObjects[1].pieces);

  RefreshBoard();
}

// DOM controller functions

// Reset resets the canvases to random tiles again
function Reset() {
  for (i = 0; i < sortObjects.length; i++) {
    sortObjects[i].pieces = Shuffle(sortObjects[i].pieces);
  }
  RefreshBoard();
}

// Changes the speed of sorts
function ChangeSpeed(val) {
  speed = val;
}

// Calls sort on each SortObject depending on sort type
function Sort() {
  //document.getElementById("refreshbttn").classList.add("disabled");
  for (let i = 0; i < sortObjects.length; i++) {
    switch (sortObjects[i].sortType) {
      case 0:
        BubbleSort(sortObjects[i].pieces);
        break;
    }
  }
}
