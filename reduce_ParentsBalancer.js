//Возвращает 0 если скобки сбалансированы.
const isParensBalanced = (str) => {
  return str.split('').reduce((counter, char) => {
    if(counter < 0) { //matched ")" before "("
      return counter;
    } else if(char === '(') {
      return ++counter;
    } else if(char === ')') {
      return --counter;
    }  else { //найден какой-то другой символ
      return counter;
    }
    
  }, 0); //<-- начальное значение для счётчика
}
isParensBalanced('(())') // 0 <-- скобки сбалансированы
isParensBalanced('(asdfds)') //0 <-- скобки сбалансированы
isParensBalanced('(()') // 1 <-- скобки несбалансированы
isParensBalanced(')(') // -1 <-- скобки несбалансированы

/*
//Возвращает 0 если скобки сбалансированы.
const isParensBalanced = (str) => {
  return str.split('').reduce((counter, char) => {
    if(counter < 0) { //matched ")" before "("
      return counter;
    } else if(char === '(') {
      return ++counter;
    } else if(char === ')') {
      return --counter;
    }  else { //найден какой-то другой символ
      return counter;
    }
    
  }, 0); //<-- начальное значение для счётчика
}
isParensBalanced('(())') // 0 <-- скобки сбалансированы
isParensBalanced('(asdfds)') //0 <-- скобки сбалансированы
isParensBalanced('(()') // 1 <-- скобки несбалансированы
isParensBalanced(')(') // -1 <-- скобки несбалансированы
*/
