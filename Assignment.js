const arr = [1, 7, 2, 8, 3];

for (var i = 1; i < arr.length; i++)
    for (var j = 0; j < i; j++)
        if (arr[i] > arr[j]) {
          var x = arr[i];
          console.log(x);
          arr[i] = arr[j];
          console.log(arr[i]);
          console.log(arr);
          arr[j] = x;
          console.log(arr[i]);
          console.log(arr);
        }

console.log(arr);

// const arrn = [13, 17, 32, 58, 23];

// console.log(arrn.sort);