var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;

var rows=9;
var cols=9;

var img=new Image();
img.onload=start;
img.src="images/test.jpg";

let pieces = []
let speed = 250;

function start(){

    pieces = CreateBoard(rows, cols);
    pieces = Shuffle(pieces);
    RefreshBoard();

}

function Reset(){
    pieces = Shuffle(pieces);
    RefreshBoard();
}

function ChangeSpeed(val){
    speed = val;
}


function BubbleSort(){

    for(var i = 0; i < pieces.length; i++) {
        (function(i){
            window.setTimeout(function(){
            for(var j = 1; j < pieces.length; j++) {
                if(pieces[j - 1].val > pieces[j].val) {
                        swap(pieces, j - 1, j);
                        RefreshBoard();
                    }
                }
            }, i * speed);
        }(i));
    }


}

function RefreshBoard(){

    let iw=canvas.width=img.width;
    let ih=canvas.height=img.height;
    let pieceWidth=iw/cols;
    let pieceHeight=ih/rows;

    let i=0;
    for(let y=0;y<rows;y++){
        for(let x=0;x<cols;x++){
            let p = pieces[i++];
            ctx.drawImage(img, x*pieceWidth, y*pieceHeight, pieceWidth, pieceHeight, p.col*pieceWidth, p.row*pieceHeight, pieceWidth, pieceHeight);
        }           
    }
}

function CreateBoard(row, col){

    let pieces = [];
    let n = 0;

    for(let i=0; i<rows;i++){
        for(let j=0; j<cols; j++){
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

function Piece(val, row, col){
    this.val = val;
    this.col=col; 
    this.row=row;
};

function Shuffle(a){
  for(let j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
  return a;
};

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
