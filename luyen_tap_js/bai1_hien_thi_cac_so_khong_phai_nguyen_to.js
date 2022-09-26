function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function notPrime(num) {
    let newArray = [];

    for (let i = 0; i <= num; i++) {
        if (!isPrime(i)) {
            newArray.push(i);
        }
    }
    return newArray;
}

let number = +prompt("nhập vào số")
document.write(notPrime(number))