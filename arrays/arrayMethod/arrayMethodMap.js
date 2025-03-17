const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

const newArray = myArray.map(el => el * 3)

console.log(newArray) // [3, 6, 9]
console.log(myArray) // [1, 2, 3]
// Оригинальный массив не изменился
// в качестве аргумента также принимает функцию и создает новый массив, в отличии от foreach