// Вариант 2

const person = {
    name: 'Bob',
    age:25
}

const person2 = {...person}

person2.name = 'Alice'

console.log(person2.name) // Alice
console.log(person.name) // Bob

// вложенные объекты в person на них сохраняется ссылка
