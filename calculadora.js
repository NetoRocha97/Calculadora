function calc (param1, param2, operator) {
    switch (operator) {
        case'+':
            return parseInt(param1) + parseInt(param2);
        case'-':
            return parseInt(param1) - parseInt(param2);
        case'*':
            return parseInt(param1) * parseInt(param2);
        case'/':
            return parseInt(param1) / parseInt(param2);
    }
}
console.log(calc(2,4,"+"));