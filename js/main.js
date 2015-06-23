"use strict";

/**
 * Created by d.emelin on 18.06.15.
 */
console.log("Script is working!");

//////// User interaction

/*var name = prompt("Как Вас зовут?", "Никак.");
console.log(name);*/

/////////Conditional operators

/*var age = prompt('возраст?', 18);
var message = (age<3) ? 'Малыш привет':
    (age<18)? 'Привет':
        (age<100)?'Здравствуйте':
            'Необычный возраст :)';
alert(message);*/

/*var JsName = prompt('Каково «официальное» название JavaScript');
if (JsName == "EcmaScript") {
    console.log('Верно')
}
else {
    console.log('не знаете? EcmaScript!')
};*/

/*var number = prompt('напишите число');
if (number < 0) {
    console.log(-1)
}
else if (number > 0) {
    console.log(1)
}
else {
    console.log(0)
}
;*/

/*var name = "admin", pass="black man";
var userName = prompt('Who is it?');
if (userName == null) {
    console.log('Cancel');
}
else if (userName == name) {
    var password = prompt("enter password");
    if (password == null) {
        console.log('Cancel');
    }
    else if (password == pass) {
        console.log('Hi, Admin');
    }
    else {
        console.log("Wrong Password")
    }
}
else {
    console.log("I don't know U");
}*/
/*var b =1;
var a = prompt("Веедите число 'а' для 'a + 1 < 4' ");
var result = (+a + +b < 4) ? 'few' : 'much';
console.log(result);
console.log(a);
console.log(b);*/
var login = prompt("Login?");
var message = (login == 'Вася') ? console.log('Привет') :
    (login =='Директор')? console.log('Здравствуйте'):
        (login == '') ? console.log('Нет логина'):
            console.log('?');
