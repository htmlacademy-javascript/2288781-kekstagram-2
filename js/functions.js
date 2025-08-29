/* eslint-disable no-console */
// Задание 1. Создать функцию для проверки длины строки
console.info('Задание первое');
/*
// cоздаем функцию для проверки длины строки
function checkLineLength(line, maxLength) {
  // проверим строку
  if (typeof line !== 'string') {
    return false;
  }
  // проверим максимальную длину
  if (typeof maxLength !== 'number' || maxLength <0) {
    return false;
  }
  // укажем, что строка возвращает true, если строка меньше или равна указанной длине, а false, если строка длиннее
  return line.length <= maxLength;
}
*/
// стрелочная функция
// const checkLineLength = (line = '', maxLength = 18) => {
//   const result = (line.length <= maxLength);
//   return result;
// };
// еще покороче - стрелочная функция
const checkLineLength = (line = '', maxLength = 18) => (line.length <= maxLength);
checkLineLength('проверяемая строка', 18);
// Проверка
console.info('Проверка первого параметра - строка: является ли строкой?');
console.log(checkLineLength('проверяемая строка', 20)); // true
console.log(checkLineLength(20, 20)); // false
console.info('Проверка второго параметра - длина: строка или число?');
console.log(checkLineLength('проверяемая строка', 'проверяемая строка')); // false
console.log(checkLineLength('проверяемая строка', 18)); // true
console.info('Отрицательное число имеет ли максимальная длина?');
console.log(checkLineLength('проверяемая строка', -100)); // false
console.log(checkLineLength('проверяемая строка', 100)); // true
console.info('Строка короче 20 символов');
console.log(checkLineLength('проверяемая строка', 20)); // true
console.info('Длина строки ровно 18 символов');
console.log(checkLineLength('проверяемая строка', 18)); // true
console.info('Строка длиннее 10 символов');
console.log(checkLineLength('проверяемая строка', 10)); // false
console.info('Проверка завершена');
/*
Техническое задание:
  1. Создать функцию для проверки длины строки -- +
  2. Проверить строку -- +
  3. Проверить максимальную длину -- +
  4. Указать, что строка возвращает true, если строка меньше или равна указанной длине, а false, если строка длиннее -- +
  5. Проверить работает ли функция -- +
Проверка:
  Строка короче 20 символов
  checkLine('проверяемая строка', 20); // true
  Длина строки ровно 18 символов
  checkLine('проверяемая строка', 18); // true
  Строка длиннее 10 символов
  checkLine('проверяемая строка', 10); // false
Что использовать?
+ Для решения этой задачи вам потребуется объявить функцию с двумя параметрами:
  строкой (line) и максимальной длиной (maxLength).
  function checkLineLength(line, maxLength) {}
+ В теле функции используйте оператор сравнения меньше или равно (<=),
  чтобы сравнить длину полученной строки (свойство length) с максимальной длиной (maxLength).
  function checkLineLength(line, maxLength) {
    const result = (line.length <= maxLength);
  }
+ Функция должна вернуть результат этого сравнения.
  function checkLineLength(line, maxLength) {
    const result = (line.length <= maxLength);
    return result;
  }
*/

// Задание 2. Палиндром
console.info('Задание второе');
// объявим функцию проверки палидрома (checkPalidrome) с одной строкой (phrase)
// function checkPalidrome(phrase) {
//   // c "нормализованной" строки (normalizePhrase) уберем с помощью метода replaceAll() все пробелы,
//   // а также приводим эту строку к нижному (метод toLowerCase()) регистру
//   const normalizePhrase = phrase.replaceAll(' ', '').toLowerCase();
//   // cоздать новую пустую строку и сохранить её в ещё одну переменную (emptyLine)
//   let emptyLine = '';
//   // создать цикл for, переменная-счётчик которого отсчитывает порядковые номера (индексы) символов (i)
//   // в «нормализованной» строке (normalizeLine) с конца к началу,
//   // то есть: изначально счётчик равен индексу последнего символа (он на 1 меньше длины строки),
//   // цикл останавливается при достижении начала строки (нулевого индекса),
//   // на каждой итерации счётчик уменьшается на 1
//   for (let i = normalizePhrase.length - 1; i >= 0; i--) {
//     // в теле цикла на каждой итерации получим очередной символ «нормализованной» строки (с помощью квадратных скобок),
//     // c помощью оператора += дозапишем этот символ в созданную на втором шаге строку
//     emptyLine += normalizePhrase[i];
//   }
//   // после того, как цикл отработает, полученную перевёрнутую строку сравним (===) с «нормализованной»,
//   const result = (normalizePhrase === emptyLine);
//   // и вернем результат этого сравнения
//   return result;
// }

// стрелочная функция
const checkPalidrome = (phrase) => {
  const normalizePhrase = phrase.replaceAll(' ', '').toLowerCase();
  let emptyLine = '';
  for (let i = normalizePhrase.length - 1; i >= 0; i--) {
    emptyLine += normalizePhrase[i];
  }
  const result = (normalizePhrase === emptyLine);
  return result;
};
checkPalidrome('топот');
// Проверка:
console.info('Строка является палиндромом - топот');
console.log(checkPalidrome('топот')); // true
console.info('Несмотря на разный регистр, тоже палиндром - ДовОд');
console.log(checkPalidrome('ДовОд')); // true
console.info('Это не палиндром - Кекс');
console.log(checkPalidrome('Кекс')); // false
console.info('Это палиндром (пробелы) - Лёша на полке клопа нашёл ');
console.log(checkPalidrome('Лёша на полке клопа нашёл ')); // true
console.info('Проверка завершена');
/*
Техническое задание:
1. Создать функцию для проверки - является ли строка палиндромом -- +
  (палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево)
2. Проверить строку на «палиндромность»: -- +
  - является ли палиндромом;
  - разный регистр - палиндром ли;
  - не палиндром.
3 (доп). Предусмотреть, когда в строке встречаются пробелы -- +
Проверка:
2. // Строка является палиндромом
  имяФункции('топот'); // true
  // Несмотря на разный регистр, тоже палиндром
  имяФункции('ДовОд'); // true
  // Это не палиндром
  имяФункции('Кекс');  // false
3. // Это палиндром
  имяФункции('Лёша на полке клопа нашёл '); // true
Что использовать?
+ объявить функцию с одним параметром — строкой (phrase)
  function checkPalidrome(phrase) {}
+ Проверить строку на «палиндромность»:
  + «Нормализовать» полученную строку:
    убрать с помощью метода replaceAll() все пробелы,
    привести строку к верхнему (метод toUpperCase())
    или к нижнему (метод toLowerCase()) регистру,
    записать полученную строку в новую переменную.
    function checkPalidrome(phrase) {
      const normalizeLine = phrase.replaceAll(' ', '').toUpperCase();
      //const normalizeLine = phrase.replaceAll(' ', '').toLowerCase();
    }
  + Создать новую пустую строку и сохранить её в ещё одну переменную.
    function checkPalidrome(phrase) {
      const normalizeLine = phrase.replaceAll(' ', '').toUpperCase();
      let emptyLine = '';
    }
  + Создать цикл for, переменная-счётчик которого
    отсчитывает порядковые номера (индексы) символов
    в «нормализованной» строке с конца к началу, то есть:
    изначально счётчик равен индексу последнего символа
    (он на 1 меньше длины строки),
    цикл останавливается при достижении начала строки
    (нулевого индекса),
    на каждой итерации счётчик уменьшается на 1.
    function checkPalidrome(phrase) {
      const normalizeLine = phrase.replaceAll(' ', '').toUpperCase();
      let emptyLine = '';
      for (let i = normalizeLine.length - 1; i >= 0; i--) {
      }
    }
  + В теле цикла на каждой итерации получать
    очередной символ «нормализованной» строки
    (с помощью квадратных скобок или метода at()).
    С помощью оператора += дозаписать этот символ
    в созданную на втором шаге строку.
    function checkPalidrome(phrase) {
      const normalizeLine = phrase.replaceAll(' ', '').toUpperCase();
      let emptyLine = '';
      for (let i = normalizeLine.length - 1; i >= 0; i--) {
        emptyLine += normalizeLine[i];
      }
    }
  + После того, как цикл отработает, полученную перевёрнутую строку
    сравнить (===) с «нормализованной».
    Вернуть результат этого сравнения.
    function checkPalidrome(phrase) {
      const normalizeLine = phrase.replaceAll(' ', '').toUpperCase();
      let emptyLine = '';
      for (let i = normalizeLine.length - 1; i >= 0; i--) {
        emptyLine += normalizeLine[i];
      }
      return normalizeLine === emptyLine;
    }
*/

// Дополнительное задание
console.info('Задание дополнительное');
// создаем функцию принимает строку, где извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа

function extractsNumbers(line) {
  let numberFromLine = '';
  if(typeof(line) !== 'string'){
    line = line.toString().replace(/\D/g, '');
  }
  // цикл — для перебора полученной строки,
  for(let i = 0; i < line.length; i++){
    // функция Number.isNaN() — чтобы проверить, получилось ли превратить символ в число
    // функция parseInt() — для превращения в число отдельных символов и результирующей строки
    if(!isNaN(parseInt(line[i], 10))){
      numberFromLine += line[i];
    }
  }
  return (numberFromLine === '') ? NaN : parseInt(numberFromLine, 10);
}

// стрелочная функция
// const extractsNumbers = (line) => {
//   const numberFromLine = line.toString().replace(/\D/g, '');
//   return parseInt(numberFromLine, 10);
// };
extractsNumbers('2023 год');
// Проверка
console.log(extractsNumbers('2023 год')); // 2023
console.log(extractsNumbers('ECMAScript 2022')); // 2022
console.log(extractsNumbers('1 кефир, 0.5 батона')); // 105
console.log(extractsNumbers('агент 007')); // 7
console.log(extractsNumbers('а я томат')); // NaN

console.log(extractsNumbers(2023)); // 2023
console.log(extractsNumbers(-1)); // 1
console.log(extractsNumbers(1.5)); // 15
/*
Техническое задание:
1. Функция принимает строку,
  извлекает содержащиеся в ней цифры от 0 до 9
  и возвращает их в виде целого положительного числа. -- +
2. Если в строке нет ни одной цифры,
  функция должна вернуть NaN:
  имяФункции('2023 год');            // 2023
  имяФункции('ECMAScript 2022');     // 2022
  имяФункции('1 кефир, 0.5 батона'); // 105
  имяФункции('агент 007');           // 7
  имяФункции('а я томат');           // NaN -- +
3. Предусмотрите случай, когда вместо строки приходит число.
  Обратите внимание, что возвращать функция по-прежнему
  должна только целые положительные числа:
  имяФункции(2023); // 2023
  имяФункции(-1);   // 1
  имяФункции(1.5);  // 15 -- +
Что использовать?
Для решения этой задачи вам пригодятся:
+ цикл — для перебора полученной строки,
+ функция parseInt() — для превращения в число отдельных символов и результирующей строки,
+ функция Number.isNaN() — чтобы проверить, получилось ли превратить символ в число,
+ метод toString() — на случай, если в качестве параметра пришло число.
*/
