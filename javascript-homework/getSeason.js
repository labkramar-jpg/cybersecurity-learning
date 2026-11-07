function getSeason(month, temperature) {


    if (!Number.isFinite(month) || !Number.isFinite(temperature)) {
        return "invalid value format";
    }

    if (month < 1 || month > 12 || !Number.isInteger(month)) {
        return "There is no month like this";
    }

    if ([12, 1, 2].includes(month) && temperature <= 5) {
        return "this is winter";
    }

    if ([3, 4, 5].includes(month) && temperature < 20) {
        return "this is spring";
    }

    if ([6, 7, 8].includes(month) && temperature > 20) {
        return "this is summer";
    }

    if ([9, 10, 11].includes(month) && temperature >= 5 && temperature <= 20) {
        return "this is autumn";
    }

    return "Season mismatch";

}


console.log("=== Positive Test Cases ===");

console.log(getSeason(12, -5));
console.log(getSeason(1, 0));
console.log(getSeason(2, 5));

console.log(getSeason(3, 10));
console.log(getSeason(5, 19.5));

console.log(getSeason(6, 25));
console.log(getSeason(8, 30));

console.log(getSeason(9, 5));
console.log(getSeason(10, 15));
console.log(getSeason(11, 20));

console.log("=== Negative Test Cases ===");

console.log(getSeason("12", 0));
console.log(getSeason(5, "15"));
console.log(getSeason(13, 10));
console.log(getSeason(5.5, 15));
console.log(getSeason(7, 10));
console.log(getSeason(12, 25));