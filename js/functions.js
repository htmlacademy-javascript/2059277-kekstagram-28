//Функция для проверки длины строки
function getStringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

getStringLength('проверяемая строка', 20);

//Функция для проверки, является ли строка палиндромом
function isPalindrome (string) {
  string = string.toLowerCase().replaceAll(' ', '');
  const lastIndex = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] === string[lastIndex - i]) {
      return true;
    }
    return false;
  }
}

isPalindrome('топот');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
function getNumber (string) {
  let newNumber = '';
  for (let i = 0; i < string.length; i++) {
    const newSymbol = parseInt(string[i], 10);
    if (!isNaN(newSymbol)) {
      newNumber += newSymbol;
    }
  }
  if (string.length) {
    return parseInt(newNumber, 10);
  }
  return NaN;
}

getNumber('2023 год');

//Функция, которая возвращает исходную строку, дополненную указанными символами до заданной длины
function getAddString (string, minLength, addString) {
  if (string.length >= minLength) {
    return string;
  }
  const difLength = minLength - string.length;
  const addSymbol = addString.slice(0, difLength % addString.length) + addString.repeat(difLength / addString.length);
  return addSymbol + string;
}

getAddString('1', 2, '0');
