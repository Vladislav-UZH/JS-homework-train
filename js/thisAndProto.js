//
//
//====================================  This file with "This" and Prototypes, Classes TASKs ONLY  ====================================
//
//
//
// const obj = {
//     name: 'Tom',
//     age: 10,
// }

// const obj1 = Object.create(obj);
// obj1.color = 'black';

// console.log("🚀 ~ ~ obj:", obj)
// console.log("🚀 ~ ~ obj1:", obj1.age)

// ---------------------------------------------------------------------------------------------------

// class Car {
//   constructor({ owner, model, licensePlate } = {}) {
//     this._owner = owner;
//     this.model = model;
//     this.licensePlate = licensePlate;
//     }
    
//     get owner() {
//         return this._owner;
//     }
// }
// console.log(Car);

// const newCar = new Car({
//   owner: "John Blackberry",
//   model: "Ford Crown Victoria",
//   licensePlate: "54GHB168",
// });
// console.log(newCar);

// const newCar1 = new Car({
//   owner: "Tom Mc Berry",
//   model: "Ford Explorer",
//   licensePlate: "50FGB178",
// });
// console.log(newCar1);

// const newCar2 = new Car({
// });
// console.log(newCar2);
// console.log(newCar.owner)
// ---------------------------------------------------------------------------------------------------
// class  Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems(){
//     return this.items;
//   }
//   addItem(newItem){
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//      this.items.filter(item => item !== itemToRemove);
//   }
// }
// //  Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// ---------------------------------------------------------------------------------------------------
/* Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
 Также класс должен иметь метод getSalary(),который будет выводить зарплату работника.
  Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.
 Вот так должен работать наш класс:
*/

// class Worker {
//     constructor({name, surname, rate, days} = {}) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return this.rate * this.days;
//     }
// }



// const worker = new Worker({name: 'Иван', surname: 'Иванов', rate: 10, days: 31});
// console.log(worker.getSalary())
// const worker1 = new Worker({name: 'Den', surname: 'Иванов', rate: 20, days: 314});
// console.log( worker.getSalary() + worker1.getSalary())

// ---------------------------------------------------------------------------------------------------

// 2. Модифицируйте класс Worker из предыдущей задачи следующим образом:
//   сделайте все его свойства приватными, а для их чтения сделайте методы - геттеры.
//   Наш класс теперь будет работать так:

// const worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы - сеттеры.

// Наш класс теперь будет работать так:

// worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10.

// class Worker {
//     #name;
//     #surname;
//     #rate;
//     #days;
//     constructor({name, surname, rate, days} = {}) {
//         this.#name = name;
//         this.#surname = surname;
//         this.#rate = rate;
//         this.#days = days;
//     }

//     get thisName() {
//     return this.#name;
 
//     };
//     set thisName(newName) {
//         this.#name = newName;
//     }
//        get thisSurname() {
//            return this.#surname;
//     };
//     set thisSurname(newSurname) {
//         this.#surname = newSurname;
//     }
//        get thisRate() {
//            return this.#rate;
//     };
//     set thisRate(newRate) {
//         this.#rate = newRate;
//     }
//        get thisDays() {
//            return this.#days;
//     };
//     set thisDays(newDays) {
//         this.#days = newDays
//     }
//     getSalary() {
//         return this.#rate * this.#days;
//     }
    
// }



// const worker = new Worker({name: 'Иван', surname: 'Иванов', rate: 10, days: 31});
// console.log(worker.getSalary())
// const worker1 = new Worker({name: 'Den', surname: 'Иванов', rate: 20, days: 314});
// console.log( worker.getSalary() + worker1.getSalary())
// console.log(worker.thisDays = 2)
// console.log(worker.thisRate = 3)
// console.log(worker.getSalary())

// ---------------------------------------------------------------------------------------------------







// ---------------------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------------------
















// ---------------------------------------------------------------------------------------------------





























// ---------------------------------------------------------------------------------------------------












