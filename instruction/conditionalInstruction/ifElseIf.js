/* if (Условие 1) {
    // Блок кода, выполняемый однократно, если Условие 1 правдиво
} else if (Условие 2) {
    // Блок кода, выполняемый однократно, усли Условие 2 правдиво
} else {
    // Блок кода, выполняемый однократно, если предыдущие условия ложны
} */

// Предпочтительный формат IF

/* 
if (Условие 1) {
    // Блок кода, выполняемый однократно, если Условие 1 правдиво
}

if (Условие 2) {
    // Блок кода, выполняемый однократно, если Условие 2 правдиво
}

if (Условие 3) {
    // Блок кода, выполняемый однократно, если Условие 3 правдиво
}
*/

const age = 25

if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log ('Is teenager')
} else {
    console.log('is child')
}

// --------------------------------

const ages = 25

if (ages >= 18) {
    console.log('is adult')
}

if (ages >= 12 && ages < 18) {
    console.log('is teenager')
}

if (ages < 12) {
    console.log('is child')
}