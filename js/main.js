"use strict";

/**
 * Created by d.emelin on 18.06.15.
 */
console.log("Script is working!");

///////// Logical operators

/*var hour = 9;
if (hor <10 || > 18) {
    console.log("Office is working between 10 and 18 hours")
}*/

/*alert( alert(1) || 2 || alert(3) );*/
/*var age = prompt('age');
if (age >=14 && age <=90) {
    console.log("good");
}
else {
    console.log("bad");
}*/
//Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.
/*var age = prompt('age');

if (!(age >=14 && age <=90)) {
    console.log("good");
}
else {
    console.log("bad");
}*/
/*
if (age <14 || age >90) {
    console.log("good");
}
else {
    console.log("bad");
}*/


///Type conversion for primitives
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3");// 6
console.log(4 + 5 + "px");// "9px"
console.log("$" + 4 + 5);// "$45"
console.log("4" - 2);// 2
console.log("4px" -2);// nan
console.log(7/0); //infinity
console.log("  -9\n" + 5);// "  -9\n5"
console.log("  -9\n" - 5);// -14
console.log(5 && 2);// 2
console.log(2 && 5);// 5
console.log(5 || 0);// 5
console.log(0 || 5);// 5
console.log(null + 1);//1
console.log(undefined + 1);// nan
console.log(null == "\n0\n");// false
console.log(+null == +"\n0\n"); // true