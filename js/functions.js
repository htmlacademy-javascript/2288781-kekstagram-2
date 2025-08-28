// Задание 1
function checkString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

// checkString();
checkString('проверяемая строка', 20);

// const checkString(string = '', maxLength = 1) => string.length <= maxLength;

// Проверка
// Строка короче 20 символов
// checkString('проверяемая строка', 20); // true

// Длина строки ровно 18 символов
// checkString('проверяемая строка', 18); // true

// Строка длиннее 10 символов
// checkString('проверяемая строка', 10); // false

/*
// Техническое задание

Что использовать?
- Для решения этой задачи вам потребуется объявить функцию с двумя параметрами:
строкой (string) и максимальной длиной (maxLength).

function checkLength(string, maxLength) {}

- В теле функции используйте оператор сравнения меньше или равно (<=),
чтобы сравнить длину полученной строки (свойство length) с максимальной длиной (maxLength).

function checkLength(string, maxLength) {
  if (string.length <= maxLength) {}
}

- Функция должна вернуть результат этого сравнения.

function checkLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}
*/
