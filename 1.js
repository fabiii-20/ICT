function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num/2; i ++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isFirstPrime(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return false;
    }
    const n = arr[0];

    if (isPrime(n)) {
        console.log(n, " is a prime");
        return true;
    } else {
        console.log(n, " is not a prime");
        return false;
    }
}


const myArray = [11, 12, 13, 14];
isFirstPrime(myArray);

