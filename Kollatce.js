let N = 27;
function kollaatce() {
  while (N != 1) {
    if (N % 2 == 0) {
      N /= 2;
    } else {
      N = N * 3 + 1;
    }
    console.log(N);
  }
}
kollaatce();
