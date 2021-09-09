// function A() {
//   let a = 1;
//   console.log("A:", a);
//   function B() {
//     let b = 2;
//     console.log("B:", a, b);
//     function C() {
//       let c = 3;
//       console.log("C:", a, b, c);
//     }
//     C();
//   }
//   B();
// }
// A();
// function createCounter() {
//   let count = 0;
//   const myfunction = function () {
//     count += 1;
//     return count;
//   };
//   return myfunction;
// }
// var increment = createCounter();
// var count1 = increment();
// count1 = increment();
// console.log(count1);

// const drinks = [
//   {
//     name: "coffee",
//     addictive: true,
//     info: function () {
//       console.log(`${this.name} is ${this.addictive ? "" : "not"} addictive`);
//     },
//   },
//   {
//     name: "juice",
//     addictive: false,
//     info: function () {
//       console.log(`${this.name} is ${this.addictive ? "" : "not"} addictive`);
//     },
//   },
// ];

// function randomDrinks(arr) {
//   return arr[Math.floor(Math.random() * drinks.length)];
// }
// randomDrinks(drinks).info();

// function cat(name) {
//   this.name = name;
// }

// const mass = [44, 1, 2, 4, 8, 12, 6];

// function findMax(mass) {
//   function maxElement() {
//     var max = 0;
//     for (let i = 0; i < mass.length; i++) {
//       if (mass[i] > max) {
//         max = mass[i];
//       }
//     }
//     return max;
//   }
//   return maxElement();
// }
// cat.prototype.count = function () {
//   console.log(findMax(mass));
// };
// cat.prototype.weight = function (weight) {
//   console.log("the cat weight is " + weight);
// };
// let myCat = new cat();
// myCat.name = "vasa";
// myCat.count(mass);
// console.log(myCat.name);
// myCat.count();
// myCat.weight(20);

// let double = (n) => n * n;
// console.log(double(2));

// var age = 18;
// let welcome = age > 18 ? () => console.log("darova") : console.log("privet");

var scoupe = ["{", 5, "}", "{", "{", "}", "{", "{", "{", "}"];
function returnRightScoupe() {
  var array = checkArray(scoupe);
  for (let i = 1; i < array.length; ) {
    if (array[i] != array[i - 1]) {
      i++;
    } else {
      array.splice(i, 1);
      i++;
    }
  }
  console.log(array);
}

function checkArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "{" && arr[i] !== "}") {
      arr.splice(i, 1);
    }
  }
  return arr;
}
returnRightScoupe();
