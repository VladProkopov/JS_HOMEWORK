// Задание 1
// let str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!'));

//Задание 2
// let date = '2025-12-31';
// console.log(date.replace(/-/g, '/'));
// console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1'));

//Задание 3
// let str = 'Я учу javascript!';
// console.log(str.substr(2, 3));
// console.log(str.substr(6, 10));
// console.log('-----')
// console.log(str.substring(2, 5));
// console.log(str.substring(6, 16));
// console.log('-----')
// console.log(str.slice(2, 5));
// console.log(str.slice(6, 16));

//Задание 4
// let sumKub = 0;
// let arr = [4, 2, 5, 19, 13, 0, 10];
// for(let i = 0; i < arr.length; i++) {
//     sumKub += arr[i] * arr[i] * arr[i];
// }
// console.log(sumKub);
// console.log(Math.sqrt(sumKub));

//Задание 5
// let a = 3;
// let b = 5;
// let c = a - b;
// console.log(Math.abs(c));

// let a2 = 6;
// let b2 = 1;
// let c2 = a2 - b2;
// console.log(Math.abs(c2));

//Задание 6                   
// const dateNow = function(){
//     let dateNow = new Date();
//     let getDate = dateNow.getDate();
//     let getMonth = (dateNow.getMonth()+ 1);

//     if(getDate < 10) getDate = "0" + getDate;
//     if(getMonth < 10) getMonth = "0" + getMonth; 
    
//     console.log(dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds()+ " " + getDate + "." + getMonth + "." + dateNow.getFullYear());
// }

// dateNow();

//Задание 7
// let str = 'aa aba abba abbba abca abea';
// console.log(str.match(/[ ab+a ]/gi).join(''));

// console.log(str.match(/[ ab+a ]/gi));

//Задание 8
// const roomTel = function(num) {
//     let regexp = /^\+375\(?(29|33|17|44|25)\)? ?[1-9][0-9]{2}[ -]?[0-9]{2}[ -]?[0-9]{2}$/gm;
//     console.log(regexp.test(num));
// };

// roomTel('+375299989892');
//Задание 9
// const regexpEmail = function(mail) {
//     let checkmail = /^[a-z0-9]+[\. \-]?[a-z0-9]+[\. \-]?[a-z0-9]+@[a-z0-9]+[\. \-]?[a-z0-9]+\.[a-z]{2,11}$/gmi;
//     console.log(checkmail.test(mail));
// }
// regexpEmail('info@gmail.ru');

//Задание 10

// let getWebsite = [];

// const checkWebsite = (link => {
// 	return getWebsite.concat(link.match(/(https?:\/\/[a-z0-9]+(?:-|\.)?[a-z0-9]+\.[a-z]{2,11})/gm), link.match(/\/[^\?\.\s#]+\//gm), link.match(/(\?[^\s#]+)/gm), link.match(/(#[a-z0-9]+)/gm));
// });

// console.log(checkWebsite('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));

