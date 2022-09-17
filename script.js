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