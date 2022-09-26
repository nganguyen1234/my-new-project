function isFibonacciNumber(number) {
    let num1 = 0;
    let num2 = 1;
    while (num1 < number) {
        let num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        if (number === num1) {
            return true;
        }
    }
    return false;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

function checkNumber(number) {
    let numArr = [];
    for (let i = 0; i <= number; i++) {
        if (isFibonacciNumber(i) && isPrime(i)) {
            numArr.push(i);
        }

    }
    return numArr;
}

document.write(checkNumber(13))
