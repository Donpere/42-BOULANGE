const factor = (nb) => {
    if (nb === 0) {
        return 1
    }
    return nb * (factor(nb - 1))
}
