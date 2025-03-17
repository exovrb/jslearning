/* if (условие) {
    Блок кода, выполняемый однократно, усле условие правдиво
}*/

let val = 10

if (val > 5) {
    val += 20
}

console.log(val) // 30

// -----------------------------------------

const person = {
    age: 20
}

if (!person.name) { // !undefined === true
    console.log('Имя не указано')
}