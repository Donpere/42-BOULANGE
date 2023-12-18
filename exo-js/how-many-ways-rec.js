const countPaths = (m, n) => {
    // Cas de base : une seule cellule
    if (m === 1 || n === 1) {
        return 1;
    }

    // Cas récursif : nombre de chemins = chemins vers le haut + chemins vers la gauche
    return countPaths(m - 1, n) + countPaths(m, n - 1);
};const gcd = (a, b) => {
    // Cas de base : b est 0
    if (b === 0) {
        return a;
    }

    // Cas récursif : le PGCD est le PGCD de b et a % b
    return gcd(b, a % b);
};


console.log(countPaths(3, 3))