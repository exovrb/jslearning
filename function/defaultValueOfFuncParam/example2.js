const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})
// с помощью () мы неявно возвращаем объект newpost

const firstPost = {
    id: 1,
    author: 'Danil'
}

console.table(newPost(firstPost))