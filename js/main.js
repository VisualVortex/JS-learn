"use strict";

/**
 * Created by d.emelin on 18.06.15.
 */
console.log("Script is working!");

///////// functions
// Блоки if/else, switch, for, while, do..while
// не влияют на область видимости переменных.
/*
function count() {
    // переменные i,j не будут уничтожены по окончании цикла
    for (var i = 0; i < 3; i++) {
        var j = i * 2;
    }
    console.log( i ); // i=3, последнее значение i, при нём цикл перестал работать
    console.log( j ); // j=4, последнее значение j, которое вычислил цикл
}
count();*/
/*Значение функции без return и с пустым return*/
function doNothing() {/*no data*/}
console.log(doNothing());
function doNothing2() {return;}
console.log(doNothing2());
/*Итого

 Объявление функции имеет вид:

 function имя(параметры, через, запятую) {
 код функции
 }
 Передаваемые значения копируются в параметры функции и становятся локальными переменными.
 Параметры функции копируются в её локальные переменные.
 Можно объявить новые локальные переменые при помощи var.
 Значение возвращается оператором return ....
 Вызов return тут же прекращает функцию.
 Если return; вызван без значения, или функция завершилась без return, то её результат равен undefined.
 При обращении к необъявленной переменной функция будет искать внешнюю переменную с таким именем, но лучше,
 // если функция использует только локальные переменные:


 Это делает очевидным общий поток выполнения — что передаётся в функцию и какой получаем результат.
 Это предотвращает возможные конфликты доступа, когда две функции, возможно написанные в разное время или разными людьми,
 //неожиданно друг для друга меняют одну и ту же внешнюю переменную.
 Именование функций:

 Имя функции должно понятно и чётко отражать, что она делает. Увидев её вызов в коде, вы должны тут же понимать, что она делает.
 Функция — это действие, поэтому для имён функций, как правило, используются глаголы.
 Функции являются основными строительными блоками скриптов. Мы будем неоднократно возвращаться к ним и изучать все более и более глубоко.*/

/*Задание 2*/
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
console.log(checkAge(prompt("Ваш возраст?", "17")));*/
function checkAge(age) {
   return (age>18) ? true : confirm('Родители разрешили?');
}
console.log(checkAge(prompt("Ваш возраст?", "17")));