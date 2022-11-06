// Обратная польская нотация или постфиксная нотация — форма записи математических и логических выражений, в которой операнды расположены перед знаками операций. Выражение читается слева направо.
// Когда в выражении встречается знак операции, выполняется соответствующая операция над двумя ближайшими операндами, находящимися слева от знака операции.
// Результат операции заменяет в выражении последовательность её операндов и знак, после чего выражение вычисляется дальше по тому же правилу.
// Таким образом, результатом вычисления всего выражения становится результат последней вычисленной операции.
//
// Например, выражение (1 + 2) * 4 + 3 в постфиксной нотации будет выглядеть так: 1 2 + 4 * 3 +, а
// результат вычисления: 15. Другой пример - выражение: 7 - 2 * 3, в постфиксной нотации: 7 2 3 * -, результат: 1.


const calcInPolishNotation = (arr) => {
    const newExpr = arr.join(' ');
    let expr = newExpr.split(" ");
    let stack = [];
    if (expr === '') {
        return 0;
    }

    for (let i = 0; i < expr.length; i++) {
        if (!isNaN(expr[i]) && isFinite(expr[i])) {
            stack.push(expr[i]);
        } else {
            let a = stack.pop();
            let b = stack.pop();
            if (expr[i] === "+") {
                stack.push(parseInt(a) + parseInt(b));
            } else if (expr[i] === "-") {
                stack.push(parseInt(b) - parseInt(a));
            } else if (expr[i] === "*") {
                stack.push(parseInt(a) * parseInt(b));
            } else if (expr[i] === "/") {
                if (parseInt(a) === 0) {
                    return null;
                }
                stack.push(parseInt(b) / parseInt(a));
            } else if (expr[i] === "^") {
                stack.push(Math.pow(parseInt(b), parseInt(a)));
            }
        }
    }

    if (stack.length > 1) {
        return "ERROR";
    } else {
        return stack[0];
    }
}

calcInPolishNotation([1, 2, '+', 4, '*', 3, '+']); // 15
calcInPolishNotation([7, 2, 3, '*', '-']); // 1

