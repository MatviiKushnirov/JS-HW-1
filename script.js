// Task 1
// Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.

let myAge = 13;
console.log("Task 1 result >>>", myAge);

// Task 2
// Створити змінну з іменем name і присвоїти їй значення свого імені. Вивести значення цієї змінної в консоль.

let myName = "Matviy";
console.log("Task 2 result >>>", myName);

// Task 3
// Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.

let isStudent = false;
console.log("Task 3 result >>>", isStudent);

// Task 4
// Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою. Вивести цей рядок в консоль.

let myFavQuote = "\"Успіх — це здатність крокувати від однієї невдачі до іншої, не втрачаючи ентузіазму\"";
console.log("Task 4 result >>>", myFavQuote);

// Task 5
// Створити змінну з іменем myNumber і присвоїти їй довільне числове значення. Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.

let myNumber = 5;
myNumber += 10;
console.log("Task 5 result >>>", myNumber);

// Task 6
// Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.

let myNull = null;
console.log("Task 6 result >>>", myNull);

// Task 7
// Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt(). Після введення імені вивести повідомлення привітання з використанням введеного імені.

alert("Task 7");
let newName = prompt("Enter your name >>>");
alert(`Hello ${newName}`);

// Task 8
// Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".

alert("Task 8");
let newRequest = confirm("Would you really like to buy this T-shirt?");

if(newRequest === true){
    alert("Thanks for the confirmation!");
} else{
    alert("Action is cancelled!");
}

// Task 9
// Створити скрипт який виводить спливаюче попередження за допомогою alert(). Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".

alert("Task 9");
alert("Alert!!! This action could be dangerous!");

let alertRequest = confirm("Would you really like to punch real Thanos?");

if(newRequest === true){
    alert("Thanks for the confirmation! Bye, bye!");
} else{
    alert("Action is cancelled! Fortunately you are not obsessed by your stupidity:)");
}