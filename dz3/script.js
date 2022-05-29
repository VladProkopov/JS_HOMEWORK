//Задание 1
for(let a = 1; a <=50; a++) {
    console.log(a);
}

for(let b = 35; b >=8; b--) {
    console.log(b);
}

// Задание 2
let c = 89;

while(c >= 11) {
    console.log(c);
    c--;
}

// Задание 3
let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum +=i;

    console.log('sum ' + i + ' = ' + sum);
}

// Задание 4
for (let i = 1; i <= 5; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += j;
    }

    console.log('sum ' + i + ' = ' + sum);
}

// Задание 5
for(let i = 8; i <= 56; i++) {
    if (i % 2 == 0)
        console.log(i);
}

i = 8;
while(i <=56 ) {
    if (i % 2 == 0)
    console.log(i);
    i++;
}

// Задание 6
for(let i = 2; i < 10; i++) {
    sum = 0;
    for(let j = 1; j < 10; j++){
        sum = i * j;
    console.log(i + ' * ' + j + ' = ' + sum);
    }
}

// Задание 7
let n = 1000;
    Number = 0;
    while (n > 50) {
        n = n /2;
        Number++;
    }

console.log(Number);


// Задание 8    не решил
let o = prompt('Введите число');
// Задание 9    не решил
let numStr = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

let num = '';
for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !=' '){
        num += numStr[i];
    } else {
        console.log(num);
        num = '';
    }       
}


// Задание 10   не решил
n = 123;

