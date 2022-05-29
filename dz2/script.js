//Задание 1
let name = prompt('Ваше Имя?');
let age = prompt('Ваш Возраст?');
let city = prompt('Ваш Город проживания?');
let phone = prompt('Ваш номер телефона?');
let email = prompt('Ваша Почта?');
let company = prompt('В какой вы компании?');

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в комании ${company}. Мои контактные данные : ${phone}, ${email}`);

// Задание 2
let year = 2022;
console.log(`Имя :${name}. Родился в ${year - age} году.`);

// Задание 3
let strNum = '123456';
    
if (strNum[0] + strNum[1] + strNum [2] == strNum[3] + strNum[4] + strNum[5]) {
    console.log('Да');
} else {
    console.log('Нет');
}    

// Задание 4
let a = 1;
   // a = 0;
   // a = -3;
if (a > 0) {
    console.log('Верно')
} else {
    console.log('Неверно');
}

// Задание 5
a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if (a + b > 1) {
    console.log((a + b) * (a + b));
}

// Задание 6
if ((a > 2 && a <11) || (b >= 6 && b < 14)) {
    console.log('Верно');
}else {
    console.log('Неверно');
}

// Задание 7
let n = 54;

if (n > 0 && n < 15) {
    console.log('1 четверть часа');
} else if (n > 15 && n < 30) {
    console.log('2 четверть часа');
} else if (n > 30 && n < 45) {
    console.log('3 четверть часа');
} else if (n > 45 && n < 59) {
    console.log('4 четверть часа');
}

// Задание 8
let day = 24;

if (day > 1 && day < 11) {
    console.log('Первая декада месяца');
} else if (day > 11 && day < 21) {
    console.log('Вторая декада месяца');
} else if (day > 21 && day <= 31) {
    console.log('Третья декада месяца');
}

// Задание 9
day = 14;
year = day / 365;
let month = day / 31 ;
let week = day / 7;
let hour = day * 24;
let minute = hour * 60;
let sec = minute * 60;
console.log(year, month, week, hour, minute, sec);

if (year < 365 ) {
    console.log('Меньше года');
} else if (year > 365) {
    console.log('Больше года');
}

if (month < 31 ) {
    console.log('Меньше месяца');
} else if (month > 31) {
    console.log('Больше месяца');
}

if (week < 7 ) {
    console.log('Меньше недели');
} else if (week > 7) {
    console.log('Больше недели');
}


// Задание 10
    //