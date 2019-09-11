// Bubble sort function
// Wrote on 9/7/2019
//
// Unstable, on slower speeds algorithm will often end without finishing. Needs further testing.
function BubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    (function(i) {
      window.setTimeout(function() {
        for (var j = 1; j < array.length; j++) {
          (function(j) {
            window.setTimeout(function() {
              if (array[j - 1].val > array[j].val) {
                Swap(array, j - 1, j);
                RefreshBoard();
              }
            }, j * speed);
          })(j);
        }
      }, i * speed);
    })(i);
  }
}
