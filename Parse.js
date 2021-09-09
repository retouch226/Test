function Parse() {
    var mass = '10 - 5 * 3 / 5';
    var splited;
    var operators;
    operators = ['*', '/', '-', '+'];
    splited = mass.split(' ');
    var n = 0;
    var prior = 0;

    for (var i = 0; i < splited.length;) {
        if (splited[i] == '-' | splited[i] == '+' | splited[i] == '*' | splited[i] == '/') {
            i++;
        }
        else {
            splited[i] = Number(splited[i]);
            i++;
        }
    }

    for (var i = 0; i <= operators.length - 1; i++) {
        for (var j = 0; j <= splited.length - 1; j++) {
            if (operators[i] == splited[j] && operators[i] == '*') {
                var a = splited[j - 1] * splited[j + 1];
                splited.splice(j - 1, 3);
                splited[j - 1] = a; //dodatu v masiv na misce j-1
            }
            if (operators[i] == splited[j] && operators[i] == '/') {
                var a = splited[j - 1] / splited[j + 1];
                splited.splice(j - 1, 3)
                splited[j - 1] = a;
            }
            if (operators[i] == splited[j] && operators[i] == '-') {
                var a = splited[j - 1] - splited[j + 1];
                splited.splice(j - 1, 3)
                splited[j - 1] = a;
            }

        }

    }
    console.log(splited);




    // }
    // for (var i = 0; i < splited.length; i++) {
    //     if (splited[i] == '*') {
    //         var a = splited[i - 1] * splited[i + 1];
    //         splited.splice(i - 1, 3);
    //         splited[i] = a;
    //         //na mesto eydalennih postavit a
    //     }
    //     if (splited[i] == '-') {
    //         if (i != 0) {
    //             var a = splited[i - 1] - splited[i + 1];
    //             splited.splice(i - 1, 3);
    //             splited[i - 1] = a;
    //         } else {
    //             var a = splited[i] - splited[i + 2];
    //             splited.splice(i, 3)
    //             splited[i] = a;
    //         }
    //         //ne ydalyat a zamenyat tak chtobi ostavalos mesto dlya novogo znacheniya
    //     }
    // }


}


Parse();

