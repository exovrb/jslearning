const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(personOne) {
    const updatePerson = Object.assign({}, personOne)
    updatePerson.age += 1
    return updatePerson
}

const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age) // 21
console.log(updatePersonOne.age) // 22

// Создание копии объекта внутри функции
