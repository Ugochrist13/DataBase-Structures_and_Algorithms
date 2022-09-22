    

let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
      var pcount = 0;
      var ncount = 0;
      var zcount = 0;
      var l = arr.length;
  
    for (var i = 0; i < l; i++) {
      if (arr[i] > 0) {
        pcount += 1;
      } else if (arr[i] < 0) {
        ncount += 1;
      } else {
        zcount += 1;
      }
    } 
      var p = pcount / l;
      var n = ncount / l;
      var z = zcount / l;

      console.log(p.toFixed(6) + "\n" + n.toFixed(6) + "\n" + z.toFixed(6))
  }