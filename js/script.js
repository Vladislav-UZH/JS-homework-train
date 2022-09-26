// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// const num = 1;

// num === 10 ? console.log('Верно') : console.log('Неверно');

//  ---------

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет
// значение '1', то в переменную result запишем 'зима', если имеет значение
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// function checkSeason(num) {
//     let result = '';
//     switch (num) {
//         case 1:
//             result = 'Зима';

//             break;
//     case 2:
//             result = 'Весна';

//             break;
//     case 3:
//             result = 'Лето';

//             break;
//     case 4:
//             result = 'Осень';

//             break;

//         default:
//             result = `Такой поры года нет`
//             break;
//     }
//     return result;
// }

// console.log(checkSeason(2));

// -----------------------------

//Используя конструкцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");

// function langsQuestion() {
//     const question = prompt('Какое официальное название JavaScript?')
//     if (question === 'ECMAScript') {
//         alert('Верно!')

//     } else {
//         alert("Не знаете? ECMAScript!")
//     }
// }
// langsQuestion()

//   --------------------------------

//Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// function authoriation() {
//     const login = prompt('Enter the login');
//     if (login === 'Admin') {

//         const password = 'mypass';
//         const input = prompt('Enter your password!');

//         if (input === password) {
//             alert('Welcome!');

//         } else alert('Incorrect password!');

//     } else if (login === null) {
//         alert('Canceled!');
//     }
//     else {
//         alert('I don`t know you!');
//     }
// console.log('Login:', login);
// }

// authoriation();

//  --------------------------------

//При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

//----------------- ARRAY -------------------

//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

//         function caclculateAverage(...arg) {
//             let sum = 0;
//             let count = 0;
//             for (const element of arg) {
//                 if (typeof element !== 'number') {
//                     continue;
//                 }
//                 sum += element;
//                 count += 1;

//             }
//             return sum / count;
//         }
// console.log(caclculateAverage(1, 2, 125));

//         ------------------------------------

// Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Jass', 'Blues'];

// styles.push('Rock-n-Roll')
// styles.splice(styles.indexOf('Blues'), 1, 'Classic');
//     console.log(styles.shift());

//  --------------- HOMEWORK ---------------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   // Change code below this line
// for (let i = min; i <= max ; i+=1) {
//     numbers.push(i);
//     }
//     console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(5, 20);

//           -----------------------------

// function filterArray(numbers, value) {
//    // Change code below this line
// const newArray = [];
//   for (let element of numbers) {
//     if (element > value) {
//       newArray.push(element);

//     }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3)

//           -----------------------------
// Напиши функцию getCommonElements(array1, array2)
// которая получает два массива произвольной длины
//  в параметры array1 и array2, и возвращает новый массив,
// состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const result = [];
//   for (let i = 0; i < array1.length ; i++) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//     console.log(result);
//   return result;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);

// ----------------------------------- -----------------------------

// function includes(array, value) {
//   // Change code below this line
//   let result = false;
//   for (let element of array) {
//     if (element === value) {
//      return result = true;
//     }
//   }
// return console.log(result);
//   // Change code above this line
// }

// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');


//  ------------------- RECRUITING TASK !!!!!!!!! ----------------------
// const example = null;

// console.log(typeof example);
// ----------------------------------- -----------------------------

// -----------------------NEW TOPIC____OBJECTS____NEW TOPIC---------------------------
// const friendsStats = {
//     name: ['Poly', 'Max', 'Den'],
    
// consoleNames() {
//         console.log(friendsStats.name);
//     }
// }

// friendsStats.consoleNames();


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// // user.mood = 'happy';
// // user.hobby = 'skydiving';
// // user['premium'] = false;
// const arr = Object.keys(user)
// for (const key of arr) {
//     console.log(`${key} - ${user[key]}`)
// }
// console.log(arr);
// console.log(user);

// --------------------------------------------------------
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Petre: 130,
// };

// const test = Object.create(salaries)

// test.Kate = 140,
//     test.David = 300,
//     console.log(test)

// function getResult(obj) {

//     const values = Object.values(obj);

//     let sum = 0;

//     // for (const value of values) {
//     //     sum += value;
        
//     // }
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log('Власні',key)
            
//         }
//          if (!obj.hasOwnProperty(key)) {
//             console.log('NOT Власні',key)
            
//         }
//         sum += obj[key];
//     }
//     return sum;
// }
// console.log(getResult(test))
// --------------------------------------------------------

// const stones = [{
//     name: 'Diamant',
//     price: 1300,
//     quantity: 3,
// },
// {
//     name: 'Emerald',
//     price: 400,
//     quantity: 5,
// },
// {
//     name: 'Gold',
//     price: 500,
//     quantity: 2,
// },
// {
//     name: 'Rubin',
//     price: 2300,
//     quantity: 7,
// }
// ]

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
            
//         }
//     }
//     return null;
// }
// console.log(calcTotalPrice(stones, 'Emerald'));
// --------------------------------------------------------------


// Вам потрібно розрахувати суму чайових, яку потрібно дати в кафе
// Робочий процес:

//1. Контрольна сума введених користувачем даних.  (Use "prompt" function).
//2. Відсоток чайових, введених користувачем.  (Use "prompt" function).
//3. Для скасованого введення показати «Скасовано».
//4. Вам потрібно перевірити вхідні дані: обидва значення мають бути числами,
//контрольна сума не може бути від'ємним числом, відсоток не може бути від'ємним і перевищувати 100.
//5. Якщо введені дані недійсні, ви повинні показати повідомлення «Недійсні вхідні дані». (Use "alert" function).
//6. Вам потрібно розрахувати суму чайових і загальну суму до сплати.
//7. Показати повідомлення: (приклад). (Use "alert" function).
//
//Чекова сума: 200
//Порада: 15%
//Сума чайових: 30
//Загальна сума до оплати: 230 грн
//
//


// const price = prompt(`До сплати:`);
// console.log(price);

// const tips = prompt(`Введіть % чайових:`)
// console.log(tips);

// if (tips === null || price === null) {
//     alert('Canceled');
// } else {
//     const newPrice = Number.parseFloat(price);
//     const newTips = Number.parseInt(tips);

//     if (Number.isNaN(newPrice) || Number.isNaN(newTips) || newPrice <= 0 || newTips > 100) {
//         alert('Недійсні вхідні дані')
//     }//6. Вам потрібно розрахувати суму чайових і загальну суму до сплати.
// //7. Показати повідомлення: (приклад). (Use "alert" function).
// //
// //Чекова сума: 200
// //Порада: 15%
// //Сума чайових: 30
// //Загальна сума до оплати: 230 грн
//     else {
//         const resultTips = Number((newPrice * (newTips / 100)).toFixed(2));
//         console.log(resultTips)
//         const resultPrice = Number((newPrice + resultTips).toFixed(2));
//         console.log(resultPrice)
        
//         alert(`Чекова сума: ${newPrice}
//         Порада: ${newTips}%
//         Сума чайових: ${resultTips}
//         Загальна сума до оплати: ${resultPrice}`)

//     }
// }
// --------------------------------------------------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let total = 0;
//   for (let product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//     }
//   }
// return total;

//   // Пиши код выше этой строки
// }
// calculateTotalPrice("Radar")
// --------------------------------------------------------------------------------------------


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   // const baseOptions = { comleted: false, category: 'General', priority: 'Normal', text: ' ' };
//   const newTask = {completed, category,priority, ...data };
  
//   return newTask
// }
// console.log(makeTask({ text: 'Buy bread' }));

// --------------------------------------------------------------------------------------------
// function addOverNum(maxNum,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (maxNum < arg) {
//   total += arg;
// }
    
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// --------------------------------------------------------------------------------------------


// function findMatches(firstArgs,...args) {
// // const spreadArr = [...arr,...args]
//   const matches = []; // Don't change this line
// for (const firstArg of firstArgs) {
//   if (args.includes(firstArg)) {
//     matches.push(firstArg);
// }
//   }
//   console.log('First arg:', firstArgs);
//   console.log('Second arg:', args);
//   // console.log('Matches Arr:',spreadArr)
//   // Change code above this line
//   console.log('Result:',matches)
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// --------------------------------------------------------------------------------------------
  
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//       // Change code below this line
//     const updating = this.books.indexOf(oldName)
//     const remove = this.books.splice(updating, 1, newName);
//     return console.log(remove);

//     // Change code above this line
//   },
// };
// bookShelf.updateBook('The last kingdom', 'Dune');
// --------------------------------------------------------------------------------------------
// 
// 
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions,
//  но только если такого зелья еще нет в инвентаре.В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// 
// 
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  // Change code below this line
  // getPotions() {
  //   return console.log(this.potions);
  // },
  // addPotion(newPotion) {
  //   const itemPotion = this.potions;

  //   for (const element of itemPotion) {
  //     if (element.name === newPotion.name) {
  //       return console.log(`Error! Potion ${newPotion.name} is already in your inventory!`)
  //     }
  //   }
  //   console.log(itemPotion)
  //         return itemPotion.push(newPotion);
  // },
  // 
  // 
  // removePotion(potionName) {
  //   for (let i = 0; i < this.potions.length; i+=1) {
  //     if (this.potions[i].name === potionName) {
        
  //       return console.log(this.potions.splice(i,1))
  //     }
      
  //   };
    
  //   return console.log(`Potion ${potionName} is not in inventory!`);
  // },
  // updatePotionName(oldName, newName) {
  //   for (let i = 0; i < this.potions.length; i += 1) {      
  //     if (this.potions[i].name === oldName) {
  //        return console.log(this.potions[i].name = newName);
  //     }
      
  //   }
  //   return console.log(`Potion ${oldName} is not in inventory!`);
  // },
  // Change code above this line
// };
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Speedf potion", price: 460 })
// atTheOldToad.removePotion('Dragon breath')
// atTheOldToad.updatePotionName('Dragon breath','Speed potion')
      //  console.log(atTheOldToad.potions)
// --------------------------------------------------------------------------------------------