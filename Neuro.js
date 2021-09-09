var x1 = 3;
var x2 = 5;
var w1 = 0.5;
var w2 = 0.3;
var w3 = 0.1;
function Neuro(x1, x2, w1, w2, w3) {
    var h1, h2, h3 = 0;
    h1 = (x1 * w1) + (x2 * w1);
    h2 = (x1 * w2) + (x2 * w2);
    h3 = (x1 * w3) + (x2 * w3);
    console.log(h1 + '/' + h2 + '/' + h3 + '/');
}
Neuro(x1, x2, w1, w2, w3);
