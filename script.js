//  Задание 1

// function num(a, b, c) {
//     console.log((a - b) / c);
// }

// num(9, 3, 2);

// Задание 2


// // КУБ
// function cube(num) {
//      return num * num * num;
// }

// let result = cube(7);
// console.log(result);

// // Квадрат
// function square(num1) {
//     return num1 * num1;
// }

// let result1 = square(7);
// console.log(result1);


// Задание 3

// function min(a, b) {
//     if(a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// let result = min(5, 1);
// console.log(result);

// function max(a, b) {
//     if(a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// let result1 = max(16, 3);
// console.log(result1);

// Задание 4              

// let arr = [];
// function getArr() {
//     for(let i; i != '';){
//         i = +prompt('Введите число ');
//         arr.push(i);
//     }
// }

// function conclusion() {
//     if(getArr() == undefined) {
//         return arr;
//     }
// }
// console.log(conclusion());


// Задание 5

// function isEven(num) {

//     for(let i = 0; i <= num; i++) {

//         if(num % 2 == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// console.log(isEven(53));

// // Задание 6

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function arr(length) {
//     let array = [];
//     for(let i = 0; i <= newArr.length; i++) {
//         if(isEven(newArr[i]) == true) {
//             array.push(newArr[i]);
//         }  
                            
//     }

//     console.log(array);
// }

// arr(newArr);

// Задание 7         // НЕ РЕШИЛ

// function pyramid(height) {
//     height = height || '@' ;
//     let h = +prompt('Введите высоту пирамиды');
//     let line = '';
//     for(let i = 1; i <= h; i++) {
//         for(let j = 1; j <= i; j ++){
//             line += '*';
//         }
        
//         console.log(line);
//             line = '';
//     }
// }

// pyramid(10);


// Задание 8    // НЕ РЕШИЛ

// let h = +prompt('Введите кол-во рядов');
// function triangle() {
//     let line = '';
//     for (let i = 1; i <= h; i++) {
//         for(let j = 1; j <= (h - i); j++){
//             line += ' ';
//         }
//         for(let j = 1; j <= ((i * 2) - 1); j++) {
//             line += '*';
//         }
//         console.log(line);
//         line = '';
//     }
// }

// triangle();


// Задание 9

// function fibanach(n) {
//     let arr = [0, 1];
//     let arr1 = [];
//     let newArr;
//     for(let i = 0; i <= n; i++) {
//             newArr = arr[0] + arr[1];
//             arr[0] = arr[1];
//             arr[1] = newArr;
//         if(arr < 1000) {return newArr} {
//             arr1.push(newArr);
//         }       
//     }
//         console.log(arr1);
// }

// fibanach(15);


// Задание 10       // НЕ ДОПИСАЛ

// let n = '55';

// function check() {
//     let sum = 0;
//     for(let i = 0; i < n.length; i++){
//         sum += +n[i];
//         if(sum > 9) {
              
//         }
        
//     }
//     console.log(sum);
// }

// check();


// Задание 11

// function printArray(array) {
//     console.log(array[i]);
//     i++;
//     if(i < array.length) printArray(array);
// }

// let i = 0;

// printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 

// Задание 12

// function request() {
//     let a = prompt('Введите имя');
//     let b = prompt('Введите фамилию');
//     let c = prompt('Введите отчество');
//     let d = prompt('Введите вашу группу');
// }

// Задание 13
