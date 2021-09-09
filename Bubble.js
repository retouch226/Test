function Bubble() {
    var temp;
    var iterationCount = 0;
    var bubArray = [];
    var c = 0;
    for (var j = 0; j < 29; j++) {
        bubArray[j] = Math.floor(Math.random() * 100);
    }
    console.log('old array' + ' ' + bubArray + '\n');

    for (var i = 0; i < bubArray.length - 1;) {
        if (bubArray[i] > bubArray[i + 1]) {
            temp = bubArray[i];
            bubArray[i] = bubArray[i + 1];
            bubArray[i + 1] = temp;
            iterationCount++;
            if (i != bubArray.length - 1) {
                i = 0;
            }
        }
        else {
            i++;
        }
    }
    console.log('New array' + ' ' + bubArray + '\n' + 'iterationCount' + ' ' + iterationCount);

    while (c < bubArray.length - 1) {
        if (bubArray[c] == bubArray[c + 1]) {
            bubArray.splice(c + 1, 1);
        }
        else {
            c++;

        }

    }
    console.log('without duplicat array' + ' ' + bubArray + '\n');

}
Bubble();

// function Bubble() {
//     var temp;
//     var iterationCount = 0;
//     var bubArray = [5, 1, 2, 6, 3, 4, 7];
//     console.log('old array' + ' ' + bubArray);

//     for (var i = 0; i <= bubArray.length - 1;) {
//         if (bubArray[i] > bubArray[i + 1]) {
//             temp = bubArray[i];
//             bubArray[i] = bubArray[i + 1];
//             bubArray[i + 1] = temp;
//             iterationCount++;


//         }
//         if (i == bubArray.length - 2) {
//             i = 0;

//         }
//         else {
//             i++;
//         }


//     }
//     console.log('New array1' + ' ' + bubArray + '\n' + 'iterationCount' + ' ' + iterationCount);

// }
// Bubble();