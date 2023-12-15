const gcd = (a, b) => {
    // Cas de base : b est 0
    if (b === 0) {
        return a;
    }

    // Cas récursif : le PGCD est le PGCD de b et a % b
    return gcd(b, a % b);
};