// Piece object is used to store each tile's data.
function Piece(val, row, col) {
  this.val = val;
  this.col = col;
  this.row = row;
}
// SortObject contains the DOM canvas and relavant info, including sort type.
function SortObject(canvas, context, pieces, sortType) {
  this.canvas = canvas;
  this.context = context;
  this.pieces = pieces;
  this.sortType = sortType;
}
