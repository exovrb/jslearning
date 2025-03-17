/* try {
    // Выполнение блока кода
} catch (error) {
    // Этот блок выполняется в случае возникновения ошибок в try
}*/

const fnWIthError = () => {
    throw new Error('Some error')
}

try {
    fnWIthError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')