var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");

var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");

var rows = 15;
var cols = 15;

var img = new Image();
img.onload = start;
img.src = "images/test.jpg";

let pieces1 = [];
let pieces2 = [];
let speed = 250;

function start() {
  pieces1 = CreateBoard(rows, cols);
  pieces1 = Shuffle(pieces1);

  pieces2 = CreateBoard(rows, cols);
  pieces2 = Shuffle(pieces2);

  RefreshBoard(canvas1, ctx1, pieces1);
  RefreshBoard(canvas2, ctx2, pieces2);
}

function Reset() {
  pieces1 = Shuffle(pieces);
  RefreshBoard(ctx1, pieces1);
}

function ChangeSpeed(val) {
  speed = val;
}

function Sort() {
  BubbleSort(pieces1);
}

function BubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    (function(i) {
      window.setTimeout(function() {
        for (var j = 1; j < array.length; j++) {
          if (array[j - 1].val > array[j].val) {
            swap(array, j - 1, j);
            RefreshBoard(ctx1, array);
          }
        }
      }, i * speed);
    })(i);
  }
}

function RefreshBoard(canvas, ctx, pieces) {
  let iw = (canvas.width = img.width);
  let ih = (canvas.height = img.height);
  let pieceWidth = iw / cols;
  let pieceHeight = ih / rows;

  let i = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let p = pieces[i++];
      ctx.drawImage(
        img,
        x * pieceWidth,
        y * pieceHeight,
        pieceWidth,
        pieceHeight,
        p.col * pieceWidth,
        p.row * pieceHeight,
        pieceWidth,
        pieceHeight
      );
    }
  }
}

function CreateBoard(row, col) {
  let pieces = [];
  let n = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      pieces.push(new Piece(n++, i, j));
    }
  }

  return pieces;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function Piece(val, row, col) {
  this.val = val;
  this.col = col;
  this.row = row;
}

function Shuffle(a) {
  for (
    let j, x, i = a.length;
    i;
    j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
  );
  return a;
}

// todo
function CanvasObject(
