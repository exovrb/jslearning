/*const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})*/
// Использование forEach для объекта
// Object.keys - получение всех ключей объекта в виде массива

//----------------------------------------

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.values(myObject).forEach(value => {
    console.log(value)
})
// Перебор значений свойств объекта
// Object.values - получение всех значений свойств в виде массива