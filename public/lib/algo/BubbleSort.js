// Bubble sort function
// Wrote on 9/7/2019
//
// Unstable, algorithm will often end without finishing. Needs further testing.
function BubbleSort(obj) {
  let array = obj.pieces;

  for (var i = 0; i < array.length - 1; i++) {
    (function(i) {
      window.setTimeout(function() {
        for (var j = 1; j < array.length; j++) {
          (function(j) {
            window.setTimeout(function() {
              if (array[j - 1].val > array[j].val) {
                Swap(array, j - 1, j);
                RefreshBoard(obj);
              }
            }, j);
          })(j);
        }
      }, i * speed);
    })(i);
  }
}
