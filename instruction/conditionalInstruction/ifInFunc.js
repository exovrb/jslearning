const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
}

console.log(sumPositiveNumbers('a', true)) // первый if
console.log(sumPositiveNumbers(-10, 5)) // второй id
console.log(sumPositiveNumbers(3, 8)) // return a + b