// Refreshes the canvas's, acts as our update function
function RefreshBoard() {
  for (let j = 0; j < sortObjects.length; j++) {
    let obj = sortObjects[j];
    let iw = (obj.canvas.width = img.width);
    let ih = (obj.canvas.height = img.height);
    let pieceWidth = iw / cols;
    let pieceHeight = ih / rows;

    let i = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let p = obj.pieces[i++];
        obj.context.drawImage(
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
}
// Creates an array of tile pieces
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
// Randomizes Pieces in array
function Shuffle(a) {
  for (
    let j, x, i = a.length;
    i;
    j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
  );
  return a;
}
// Swap is used by every algorithm
function Swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
