//   IF, ELSE
// Задача 1
/*let a = prompt('Введите число a');
let b = prompt('Введите число b');
let c = prompt('a *  b чему равно?');
 if (a * b == c ) {

    console.log(true);

 }  else {

    console.log(false);
     }*/
 
// Задача 2
/*let n = 24;
switch (true) {
    case (n > 0 && n <= 15):
        console.log('Первая') 
    break;
    case (n > 15 && n <= 30):
        console.log('Вторая') 
    break;
    case (n > 30 && n <= 45):
        console.log('Третья') 
    break;
    case (n > 45 && n <= 59):
        console.log('Четвертая') 
    break;
}*/


// Задача 3
/*let a = 'abcde';
if(a[0] === 'a' ) {
    console.log(true)
} else {
    console.log(false);
}*/

// Задача 4
/*let a = '123456';
if(a[0] === '1') {
    console.log('Да');
} else if (a[0] === '2') {
    console.log('Нет');
} else if (a[0] === '3') {
    console.log('Нет');
}*/

// Задача 5 
/*let a = '123';
let sum = 0;
    sum = +a[0] + +a[1] + +a[2];
console.log(sum);*/ 

// Задача 6   НЕ РЕШИЛ
/*let a6 = 2;
let sum = 0;
if(a6 == 0 || a6 == 2 ) {
     sum = (a6[0] + 7);
    
    console.log(a6);
}*/

// Задача 7
/*let name = 'Stive';
let age = 14;
switch (true) {
    case (age > 0 && age <= 12):
        console.log(name);
        console.log('Steve is a child')
    break;
    case (age > 12 && age <= 18):
        console.log(name);
        console.log('Steve is a teenager')
    break;
    default :
        console.log(name);
        console.log('Steve is an adult')
}*/

// Задача 8
/*let a = prompt ('Введите число a');
let b = prompt ('Введите число b');
if(a > b) {
    console.log(a);
} else if(a < b) {
    console.log(b)
}*/

// Задача 9
//let x;
//let y;
//(x > y) ? console.log('х больше, чем у') : console.log('х не больше, чем у');

// Задача 10
/*let a = prompt('длина первой стороны');
let b = prompt('длина второй стороны');
let c = prompt('длина третьей стороны');
if (a + b <= c) {
    console.log('Треугольник упал')
} else if (a + b > c) {
    console.log('Треугольник ТОП')
}*/

//   WHILE, FOR

// Задача 1
/*for(let i = 1; i <= 50; i++){
    console.log(i);
}*/

// Задача 2
/*for(let i = 50; i >= 1; i--){
    console.log(i);
}*/

// Задача 3
/*for(let i = 50; i >= 1; i-=2){
    console.log(i);
}

for(let i = 50; i >= 1; i-=5){
    console.log(i);
}

for(let i = 50; i >= 1; i-=10){
    console.log(i);
}*/

// Задача 4
/*sum = 0;
sum1 = 0;
for(let i = 1; i <= 50; i++) {
    sum += i;

    if (i % 2 == 1) {
        sum1 += i;
    }
}

console.log(sum, sum1);*/

// Задача 5
/*let a = prompt('Введите число');
let sum = 0;
for (let i = 0; i <= a; i++) {
    sum += i;
    
}
console.log(sum);*/

// Задача 6
/*let a = 472;
let aRev = '';

a = String(a);

let i = a.length-1;

while (i >= 0) {
    aRev = aRev + a[i];
    i--;
}

console.log(aRev);*/

// Задача 7
/*let a = 424976;  //9
let max = 0;

a = String(a);
for (let i = 0; i <= a.length-1; i++) {
    if(a[i] > max) max = a[i];
}

console.log(max);*/

// Задача 8
/*let a = 2341;

a = String(a);
let sum = (+a[0] + +a[a.length-1]); 

console.log(sum);*/

// Задача 9
/*let str = 'В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.';

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] != ' ') count++
}

console.log(count);*/

// Задача 10  НЕ ПОНИМАЮ


//Задача 11
/*let a = prompt('Введите пароль');

let pass = '1Assaw$';

switch(pass) {
    case '1Assaw$':
        console.log('Доступ разрешен!')
    break;
    default :
    console.log('Не правильно!!!!');
}*/


//Задача 12
let a = 7646546546564;
a = String(a);
for(let i = 0; i < a.length-1; i++) {
    console.log(a[i]);
}

//Задача 13

//Задача 14