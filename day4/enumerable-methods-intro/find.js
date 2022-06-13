// // ищем число в массиве numbers, которое меньше чем limit
// function firstUnder(numbers, limit) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < limit) {
//       return numbers[i];
//     }
//   }

//   return undefined;
// }

function firstUnder(numbers, limit) {
  return numbers.find(function(el) {
    return (el < limit)
  })
}

// // ищет строку в массиве strings, которая начинается с указанной буквы
// function startsWith(strings, letter) {
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i][0] === letter) {
//       return strings[i];
//     }
//   }

//   return undefined;
// }

function startsWith(strings, letter) {
  return strings.find(function(el) {
    return (el[0] === letter)
  })
}