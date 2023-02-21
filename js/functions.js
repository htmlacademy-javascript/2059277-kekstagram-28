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
  string = string.replaceAll(' ', '');
  let newNumber = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === Number(string[i])) {
      newNumber += parseInt(string[i],10);
      return newNumber;
    }
    return NaN;
  }
}

getNumber('2023 год');
