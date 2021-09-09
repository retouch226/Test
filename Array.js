function Array1() {
    var i = 0;
    var Nums = [1, 2, 2, 3, 4, 4, 4, 5];
    while (i < Nums.length - 1) {
        if (Nums[i] == Nums[i + 1]) {
            Nums.splice(i + 1, 1);
        }
        else {
            i++;

        }

    }
}
Array1();
