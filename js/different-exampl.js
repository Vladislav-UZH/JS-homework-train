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








// --------------------------------------------------------------------------------------------
