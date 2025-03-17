const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name) // Bogdan
console.log(commentsQty) // 23

// объявление новых переменных и присваивание значений на основе значений свойст объекта