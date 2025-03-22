const myName = () => {
    console.log('Bogdan')
}

const sum = (a, b) => a + b

// export default myName - экспорт одного элемента

export {
    myName,
    sum
}
// экспорт нескольких элементов