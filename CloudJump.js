function Jump() {
    var Clouds = [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1];
    for (var i = 0; i < Clouds.length - 1;) {
        if (Clouds[i + 1] == 2 || Clouds[i + 1] && Clouds[i + 2] == 1) {
            i = i + 2;
            console.log(Clouds[i] + ' ');
        }
        else {
            i++;
            console.log(Clouds[i] + ' ');

        }
    }
}
Jump();
