const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false
}

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }

    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile)) // User Bogdan has 23 comments