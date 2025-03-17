const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.shift()

console.log(myArray) // [2, 3]

const removedElement = myArray.shift()

console.log(myArray) // [3]
console.log(removedElement) // 2

// shift удаляет первый элемент из массива