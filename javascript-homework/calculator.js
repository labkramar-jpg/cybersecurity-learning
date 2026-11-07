
function calculator(a, b, operator) {

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "invalid value format, not a number";
    }

    if (operator === "+") {
        return a + b;

    }
    else if (operator === "-") {
        return a - b;

    }
    else if (operator === "*") {
        return a * b;

    }
    else if (operator === "/") {
        if (b === 0) {
            return "Division by zero is not allowed";
        }
        return a / b;

    }

    return "unknown operator";

}



console.log("=== Positive Test Cases ===");

console.log(calculator(10, 5, '+'));
console.log(calculator(20, 8, '-'));
console.log(calculator(6, 4, '*'));
console.log(calculator(20, 5, '/'));
console.log(calculator(-10, 5, '+'));
console.log(calculator(10, 4, '/'));

console.log("=== Negative Test Cases ===");

console.log(calculator(20, 0, '/'));
console.log(calculator('10', 5, '+'));
console.log(calculator(10, '5', '-'));
console.log(calculator(null, 5, '*'));
console.log(calculator(10, 5, '%'));
console.log(calculator(10, 5, ''));
console.log(calculator(NaN, 5, '+'));
console.log(calculator(Infinity, 5, '*'));