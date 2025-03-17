const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.pop()

console.log(myArray) // [1, 2]

const removedElement = myArray.pop()

console.log(myArray) // [1]
console.log(removedElement) // 2 - последний удаленный элемент

// pop удаляет последний элемент из массива