// let mass = [];
// function fibonacci() {
//   for (var i = 0; i < 5; i++) {
//     (function (j) {
//       mass.push(function () {
//         console.log(j);
//       });
//     })(i);
//   }
// }
// fibonacci();
// mass[3]();

let fib = [1, 2, 3, 5, 8, 13];
function fibonacci() {
  for (var i = 0; i < fib.length; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(j);
      }, 1500);
    })(i);
  }
}
fibonacci();
