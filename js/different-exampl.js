//
//
//====================================  This file with DIFFERENT TASKs ONLY  ====================================
//
//
//
// const booksShelf = [
//   {
//   book: 'Hobbit The desolation of Smaug',
//   bookPrice: 100,
//   amount: 2},
//   {
//   book: 'Lord Of The Rings Two Towers',
//   bookPrice: 135,
//   amount: 1},
//   {
//   book: 'Lord Of The Rings The King of Gondor',
//   bookPrice: 250,
//   amount: 13},
//   {
//   book: 'Lord Of The Rings The Fellowship',
//   bookPrice: 100,
//   amount: 2}
// ]

// const totalPriceBooks = (bookPrice, amount, callback) => {
//   let total = 0;
//   for (const el of booksShelf) {
//     total += el.bookPrice * el.amount;
//   }
//   return console.log(`Total price is ${total}, your amount is: ${amount}.`);
// };
//  totalPriceBooks()


// // console.log(foo(10,50))
//
// --------------------------------------------------------------------------------------------
//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// ========================================================================================
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const findTheMinNumber = numbers => {
//     let minNumber = numbers[0];
//     if (Array.isArray(numbers)) {
//         for (const num of numbers) {
//             if (num < minNumber) {
//                 minNumber = num;
//             }
//         }
//     return minNumber
//         console.log()
//     }
//     return 'Number is not array'
// };
// console.log(findTheMinNumber(numbers))
// --------------------------------------------------------------------------------------------

// const findTheMinNumberTwo = numbers => Array.isArray(numbers) ? Math.min(...numbers) : 'Numbers is not array';
// console.log(findTheMinNumberTwo(numbers))

// --------------------------------------------------------------------------------------------
//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.
// ========================================================================================
// const caclculateAverage = (...nums) => {
//     let total = 0;
//     for (const number of nums) {
//         if (!Number.isNaN(number)) {
//             return console.log('Error, correct entered arguments :(')
//         }
//         else {
//             console.log('In progress')
//         }
//     }
//     return nums.reduce((acc, num) => (acc + num) / nums.length, 0)
// }
// console.log(caclculateAverage(5,5,5, false));



// --------------------------------------------------------------------------------------------
// const caclculateAverage = (...nums) => {
//       nums.filter(num => typeof num === 'number').reduce((acc, num,midx,array) => acc + num / array.length, 0) ;
     
// }
// console.log(caclculateAverage(5,5,5, false));
// --------------------------------------------------------------------------------------------
//Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает и возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта
// ========================================================================================

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => stones.filter(stone => stone.name === stonesName).reduce((acc, stone) => stone.price * stone.quantity, 0);

// console.table(calcTotalPrice(stones,"Изумруд"));
// --------------------------------------------------------------------------------------------
//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат
// ========================================================================================
// const calculator = {
    
//     read(a, b) {
//         this.firstValue = a;
//         this.secondValue = b;
//     },
//     sum() {
//         return this.firstValue && this.secondValue ? this.firstValue + this.secondValue : console.log('Enter correct arguments');
//     },
//     mult() {
//         return this.firstValue && this.secondValue ? this.firstValue * this.secondValue : console.log('Enter correct arguments');
//     },
// }
// console.log(calculator.read(1,5));
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.dir(calculator);
// --------------------------------------------------------------------------------------------

/*Дан массив с числами. 50 чисел Наполняем, как в прошлом задании. С помощью цикла проверьте, что в нем есть элемент со значением которое пользователь вводит в prompt("Введите число от 0 до 50").
 Как только будет найден первый такой элемент - выведите 'Есть'.
  Если такого элемента нет - вывести alert('Такого числа нет в массиве').*/
// Дополнительно сделать проверку на число, если введено число
// const arr = [];
// for (let i = 0; i <= 50; i+=1) {
//     arr.push(i)
    
// }

// const inputNum = Number(prompt('Enter your number!'));


// if (typeof inputNum === 'number') {
//         if ( arr.includes(inputNum)) {
//             alert(`Yes, your entered number (${inputNum}) is in collection!`);
            
//         } else {
//             alert(`Sorry, I can not find the number`)
//         };
// } else {
//     alert(`${inputNum} is not correct! Enter only number!`)
// };


// console.table(arr)




// --------------------------------------------------------------------------------------------
/* Є масив із числами. Створіть із нього новий масив,
 де залишаться лежати лише позитивні числа. Створіть для цього допоміжну функцію isPositive(),
  яка параметром прийматиме число і повертатиме true, якщо число позитивне, і false - якщо негативне.
//  */
//
// const arr = [-1,-3,-4,0,1,2,5,9];
// const isPositive = num => num > 0 ? true : false;

// for (let i = 0; i < arr.length; i += 1) {
    
//     // if (isPositive(arr[i])) {
//     //      positiveNums.push(arr[i])
//     // }
//     isPositive(arr[i]) ? positiveNums.push(arr[i]) : console.log('Error');

    
// }
// console.log(positiveNums)



// const isPositive = arr.filter(num => num > 0);
// console.log(isPositive)
// --------------------------------------------------------------------------------------------
//  Реализуйте класс Student(Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства: name(имя, наследуется от User),
// surname(фамилия, наследуется от User), year(год поступления в вуз).
// Класс должен иметь метод getFullName()(наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс
// студента(от 1 до 5).Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

// class User{
//     constructor({name, surname, year}){
//         this.name = name;
//         this.surname = surname;
//         this.year = year;
//     }
//     getFullName() { return `${this.name} ${this.surname}` }
//     getCourse() { return 2022 - this.year}
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname, year)
//     }
// }

// const student = new Student({name:'Den', surname:'Иванов', year:2019});

// console.log(student.getFullName()); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName()); //выведет 'Иван Иванов'
// console.log(worker.year); //выведет 2019console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2022

// --------------------------------------------------------------------------------------------
// const users = [
// 	{
// 		name: 'Moore Hensley',
// 		email: 'moorehensley@indexia.com',
// 		eyeColor: 'blue',
// 		friends: ['Sharron Pace'],
// 		isActive: false,
// 		balance: 2811,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sharlene Bush',
// 		email: 'sharlenebush@tubesys.com',
// 		eyeColor: 'blue',
// 		friends: ['Briana Decker', 'Sharron Pace'],
// 		isActive: true,
// 		balance: 3821,
// 		gender: 'female',
// 	},
//     {
// 		name: 'Ross Vazquez',
// 		email: 'rossvazquez@xinware.com',
// 		eyeColor: 'green',
// 		friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// 		isActive: false,
// 		balance: 3793,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Elma Head',
// 		email: 'elmahead@omatom.com',
// 		eyeColor: 'green',
// 		friends: ['Goldie Gentry', 'Aisha Tran'],
// 		isActive: true,
// 		balance: 2278,
// 		gender: 'female',
// 	},
// 	{
// 		name: 'Carey Barr',
// 		email: 'careybarr@nurali.com',
// 		eyeColor: 'blue',
// 		friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
// 		isActive: true,
// 		balance: 3951,
// 		gender: 'male',
// 	},
//     {
// 		name: 'Blackburn Dotson',
// 		email: 'blackburndotson@furnigeer.com',
// 		eyeColor: 'brown',
// 		friends: [
// 			'Jacklyn Lucas',
// 			'Linda Chapman',
// 			'Adrian Cross',
// 			'Solomon Fokes',
// 		],
// 		isActive: false,
// 		balance: 1498,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sheree Anthony',
// 		email: 'shereeanthony@kog.com',
// 		eyeColor: 'brown',
// 		friends: ['Goldie Gentry', 'Briana Decker'],
// 		isActive: true,
// 		balance: 2764,
// 		gender: 'female',
// 	},
// ];

// const base = {};

// const keys = Object.keys(users[0])
// for (const key of keys) {
//     base[key] = []
// }
// // console.log(base)

// const restAllValues = (users) => {
//     for (const element in base) {
//         console.log(element)
//         for (const user of users) {
//             base[element].push(user[element])
//         }
//     }
//     return base;
// };
// console.log("🚀 ~ file: different-exampl.js ~ line 315 ~ restAllValues(users)", restAllValues(users))


// balance: [2811, 3821, 3793, 2278, 3951, 1498, 2764]
// email: ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com']
// eyeColor: ['blue', 'blue', 'green', 'green', 'blue', 'brown', 'brown']
// friends: [Array(1), Array(2), Array(3), Array(2), Array(3), Array(4), Array(2)]
// gender: ['male', 'female', 'male', 'female', 'male', 'male', 'female']
// isActive: [false, true, false, true, true, false, true]
// name: ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// --------------------------------------------------------------------------------------------
//Напишите две функции
//1)
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию.
// 2)
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой


// const letMeSeeYourName = (callback) => {
//   const inputUser = prompt('Enter your name, please!');
//   if (inputUser) {
//     return callback(inputUser);
//   }
//   alert('Canceled by user');
//   return console.log('Canceled by user');
// }

// const greet = (name) => console.log('Hello,', name);

// letMeSeeYourName(greet);

// --------------------------------------------------------------------------------------------
//    ЗАМЫКАНИЯ    ЗАМИКАННЯ    CLOSURES    


//Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// const makeShef = shefName => {
//   return function makeDish(dish) {
//      console.log(`${shefName} is cooking ${dish}`);
//   }
  
// }
// const poly = makeShef('Poly')
// poly('Cake')
// const jack = makeShef('Jack')
// jack('pizza')

// --------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------
