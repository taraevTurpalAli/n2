/* добавляет восклицательный знак в конец каждого элемента массива */
// function exclamations(strings) {
//   const loudStrings = [];

//   for (let i = 0; i < strings.length; i++) {
//     loudStrings.push(strings[i] + '!');
//   }

//   return loudStrings;
// }

function exclamations(strings) {
  return strings.map(function(el) {
    return `${el}!`
  })
}

/* преобразует все числа из массива в квадрат */
// function squareAll(numbers) {
//   const squares = [];

//   for (let i = 0; i < numbers.length; i++) {
//     squares.push(numbers[i] * numbers[i]);
//   }

//   return squares;
// }

function squareAll(numbers) {
  return numbers.map(function(el){
    return el * el
  })
}


/* заменяет все слова в массиве на их первые буквы */
// function firstLetters(words) {
//   const letters = [];

//   for (let i = 0; i < words.length; i++) {
//     letters.push(words[i][0]);
//   }

//   return letters;
// }

function firstLetters(words) {
  return words.map(function(el) {
    return el[0]
  })
}
