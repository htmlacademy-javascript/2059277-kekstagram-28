//Функция для проверки длины строки
const getStringLength = (string, maxLength) => string.length <= maxLength;

getStringLength('проверяемая строка', 20);

//Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  const lastIndex = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[lastIndex - i]) {
      return false;
    }
  }
  return true;
};

isPalindrome('топот');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const getNumber = (string) => {
  let newNumber = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      newNumber += string[i];
    }
  }
  return parseInt(newNumber, 10);
};

getNumber('2023 год');

//Функция, которая возвращает исходную строку, дополненную указанными символами до заданной длины
const getAddString = (string, minLength, addString) => {
  if (string.length >= minLength) {
    return string;
  }
  const difLength = minLength - string.length;
  const addSymbol = addString.slice(0, difLength % addString.length) + addString.repeat(difLength / addString.length);
  return addSymbol + string;
};

getAddString('1', 2, '0');
