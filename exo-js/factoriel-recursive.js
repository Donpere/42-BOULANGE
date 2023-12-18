const factorial = (n) => {
    // Cas de base : la factorielle de 0 est 1
    if (n === 0) {
        return 1;
    }

    // Cas récursif : n! = n * (n-1)!
    return n * factorial(n - 1);
};

let nb = 8;
console.log(factorial(nb));
