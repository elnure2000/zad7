/*1. Скрипт запрашивает ввести букву русского алфавита. Скрипт должен вывести сообщение какая эта буква - гласная или согласная - 10 баллов

let vowels = ["а", "я", "у", "ю", "о", "е", "ё", "э", "и", "ы"];
let consonants = [
  "б",
  "в",
  "г",
  "д",
  "ж",
  "з",
  "й",
  "к",
  "л",
  "м",
  "н",
  "п",
  "р",
  "с",
  "т",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
];
let letter = prompt("введите буквы");
for (let i = 0; i < vowels.length; i++) {
  if (letter == vowels[i]) {
    document.write("Гласная");
  }
}
for (let a = 0; a < consonants.length; a++) {
  if (letter == consonants[a]) {
    document.write("Согласная");
  }
}*/
/*2. “Калькулятор” - пользователь вводит с клавиатуры число, символ арифметического действия (+, -, *, /) и еще одно число, Скрипт должен вывести результат  - 10*/

/*let num = +prompt("сан жазыныз");
let sim = prompt("арихметикалык символ жазыныз");
let num2 = +prompt("сан  жазыныз");
let result;
if (sim == "+") {
  result = num + num2;
  document.write(result);
} else if (sim == "-") {
  result = num - num2;
  document.write(result);
} else if (sim == "*") {
  result = num * num2;
  document.write(result);
} else if (sim == "/") {
  result = num / num2;
  document.write(result);
} else {
  document.write("туура арихметикалык символ жазыныз");
}*/

//3. Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой от 3 до 8, вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д
let firstNum = [3, 4, 5, 6, 7, 8];
let secondNum = [0, 1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < firstNum.length; i++) {
  for (let a = 0; a < secondNum.length; a++) {
    document.write(`${firstNum[i]}${secondNum[a]},  \ `);
  }
}
