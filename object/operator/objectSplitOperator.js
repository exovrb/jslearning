const button = {
    width: 200,
    text: "Buy"
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)

// Создание нового объекта на типе старого и добавление в него свойств через оператор разделения объекта на свойства '...'