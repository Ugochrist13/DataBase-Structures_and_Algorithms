// const myArr = [];

// myArr[0] = prompt("input your first number")
// myArr[1] = prompt("input your second number")
// myArr[2] = prompt("input your third number")

// if (myArr[0] >= myArr[1] && myArr[0] >= myArr[2] && myArr[1] >= myArr[2]){
//     alert(`${myArr[0]}, ${myArr[1]}, ${myArr[2]}`);
// }else if(myArr[0] >= myArr[1] && myArr[0] >= myArr[2] && myArr[1] <= myArr[2]){
//     alert(`${myArr[0]}, ${myArr[2]}, ${myArr[1]}`);
// }else if(myArr[1] >= myArr[0] && myArr[1] >= myArr[2] && myArr[0] >= myArr[2]){
//     alert(`${myArr[1]}, ${myArr[0]}, ${myArr[2]}`);
// }else if(myArr[1] >= myArr[0] && myArr[1] >= myArr[2] && myArr[0] <= myArr[2]){
//     alert(`${myArr[1]}, ${myArr[2]}, ${myArr[0]}`);
// }else if(myArr[2] >= myArr[1] && myArr[2] >= myArr[0] && myArr[1] >= myArr[0]){
//     alert(`${myArr[2]}, ${myArr[1]}, ${myArr[0]}`);
// }else if(myArr[2] >= myArr[1] && myArr[2] >= myArr[0] && myArr[1] <= myArr[0]){
//     alert(`${myArr[2]}, ${myArr[0]}, ${myArr[1]}`);
// }


var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
if(Arr[1] < Arr[2]){
  let va =Arr[1]
  Arr[1] = Arr[2];
  Arr[2] = va;

  console.log(va)
}

// for (var i = 1; i < Arr.length; i++)
//     for (var j = 0; j < i; j++)
//         if (Arr[i] < Arr[j]) {
//           var x = Arr[i]; //[7]
//           Arr[i] = Arr[j];//[7,1]
//           Arr[j] = x;
//         }

// console.log(Arr);
//  Run code snippetHide results
