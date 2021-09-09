const M = 'tenet';
const d = M.split('');
let p = false;

function anaLgrama(M) {
    for (var i = 0; Math.floor(i <= d.length / 2); i++) {
        for (var j = d.length - 1; j >= 0; j--) {
            if (d[i] == d[j]) {
                console.log('yes' + ' ' + d[i] + ' ' + d[j]);
                i++;
            } else {
                console.log(`nit! ${d[i]} ${d[j]}`);
                i++;

            }
        }

    }
}

function dowhile(M) {
    var i = 0;
    var j = d.length - 1;
    var ser = Math.floor(d.length / 2);

    while (d[i] == d[j] && (i <= ser - 1) && (j >= ser + 1)) {
        i++;
        j--;
        if (i == ser) {
            p = true;
        } else {
            p = false;
        }
    }
    if (p == true) {
        console.log('palindrom');
    } else {
        console.log('ne palindrom');
    }

}

dowhile(M);
//anaLgrama(M);
