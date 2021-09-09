let inputArray = [4, 1, 3, 1, 5, 1, 3, 8];
let single = [];
let copy = [];
let count = 1;

function contains(arr, value) {
  console.log(count++);
  for (var d = 0; d <= arr.length - 1; d++) {
    if (arr[d] === value) {
      return true;
    }
  }
  return false;
}

function Single(mass) {
  var i = 0;
  while (i < mass.length) {
    let j = 0;
    // <=?
    for (i = 0; i < mass.length; i++) {
      for (j = i + 1; j <= mass.length - 1; j++) {
        if (
          mass[i] != mass[j] &&
          j == mass.length - 1 &&
          contains(copy, mass[i]) == false
        ) {
          single.push(mass[i]);
        } else if (mass[i] == mass[j]) {
          copy.push(mass[i]);
          break;
        }
      }
    }
  }
  if (contains(copy, mass[i - 1]) == false) {
    single.push(mass[i - 1]);
    console.log("single:" + single);
  }

  console.log("copy:" + copy);
  console.log("single:" + single);
}

Single(inputArray);
