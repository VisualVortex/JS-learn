"use strict";

/**
 * Created by d.emelin on 18.06.15.
 */
console.log("Script is working!");

///////// Loops - while, for
/*
 var sum = 0;

 while (true) {

 var value = +prompt("Введите число", '');

 if (!value) break; // (*)

 sum += value;
 console.log(sum);
 }
 alert( 'Сумма: ' + sum );
 */

/*
for (var i = 0; i < 10; i++) {
    if (i%2 ==0) continue;
    console.log(i);
}*/

/*
for (var i = 2; i<=10; i++) {
    if (i%2>0) continue;
console.log(i);
}
*/
/*for (var i = 0; i < 3; i++) {
    console.log( "номер " + i + "!" );
}*/
/*
var i=0;
while (i++<3) console.log( "номер " + i + "!" );*/
/*

var i;
do {i = prompt("Enter number more than 100",0);
} while (i<=100 && i != null);*/

nextPrime:
    for (var i = 1; i < 10; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log( i ); // простое
    }