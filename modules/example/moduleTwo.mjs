// import printMyName from './moduleOne.js' - импорт одного элемента

import { myName as printMyName,sum } from './moduleOne.mjs'
// имопрт нескольких элементов
// as позволяет переименовывать

printMyName()

const res = sum(10, 5)
console.log(res)