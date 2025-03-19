/*
for (Element of Iterable) {
    // Действия с определенным элементом
}
*/

const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}
// Перебирает все символы в строке

//------------------------------------------

const myArray = [true, 10, 'abc', null]

for (const element of myArray) {
    console.log(element)
}
// Перебирает элементы у массива
// Не рекомендуется, есть forEach и т.д.

myArray.forEach(element => {
    console.log(element)
})
// Пример как правильнее использовтаь через forEach

// FOR OF НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ НА ОБЪЕКТЫ