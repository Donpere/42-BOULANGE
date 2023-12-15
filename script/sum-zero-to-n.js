const sum = (n) => {
    // Cas de base : n est 1
    if (n === 1) {
        return 1;
    }

    // Cas récursif : sum(n) = n + sum(n-1)
    return n + sum(n - 1);
};
