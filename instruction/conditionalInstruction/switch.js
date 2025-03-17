/*
switch (Выражение) {
    case A:
        // Действия если Выражение === А
        break
    case B:
        // Действие если Выражение === B
        break
    default:
        // Действия по умолчанию
}
*/

const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2:
        console.log('Февраль')
        break
    default:
        console.log('Это не зимний месяц')
}