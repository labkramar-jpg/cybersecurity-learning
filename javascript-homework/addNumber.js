const numbers = [];

function addNumber(number) {
    if (!Number.isFinite(number)) {
        console.log("invalid value format");
        return;
    }
    numbers.push(number);
    console.log(`Число ${number} добавлено в массив.`);
}

addNumber('hello');
addNumber(-5);
addNumber(0);
addNumber(25);
addNumber(-15);
addNumber(0);
addNumber(7);

console.log(numbers);


function analyzeNumbers() {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (const number of numbers) {
        if (number > 0) {
            positive++;
        }
        else if (number < 0) {
            negative++;
        }
        else {
            zero++;
        }
    }
    console.log(`Positive numbers: ${positive}`);
    console.log(`Negative numbers: ${negative}`);
    console.log(`Zero numbers: ${zero}`);

}

analyzeNumbers();