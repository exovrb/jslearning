const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.unshift(true)

console.log(myArray) // [true, 1, 2, 3]

myArray.unshift('abc')

console.log(myArray) // ['abc', true, 1, 2, 3]

// unshift добавляет элемент в начале массива