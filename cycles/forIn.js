/*
for (key in Object) {
    // Действие с каждым свойством объекта
    // Значения свойства - Object[key]
}
*/

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}

