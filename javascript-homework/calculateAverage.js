const numbers = [];

function addNumber(number) {
    if (!Number.isFinite(number)) {
        console.log("invalid value format");
        return;
    }
    numbers.push(number);
    console.log(`Число ${number} добавлено в массив.`);
}

function calculateAverage() {
    let sum = 0;

    if (numbers.length === 0) {
        console.log("Array is empty");
        return;
    }
    for (const number of numbers) {
        sum += number;
    }

    const average = sum / numbers.length;
    console.log(average.toFixed(2));

}

calculateAverage();

addNumber(2);
addNumber(5);
addNumber(10);
addNumber(-5);
addNumber(0);

calculateAverage();