let dublicats = [1, 1, 2, 2, 3, 4, 5, 5];
let w = [];
let j = 0;

function withoutDublicats(dublicats) {
  for (var i = 0; i < dublicats.length; i++) {
    if (dublicats[i] === dublicats[i + 1]) {
      i++;
    } else {
      w[j] = dublicats[i];
      j++;
    }
  }
  console.log(w);
}
withoutDublicats(dublicats);
