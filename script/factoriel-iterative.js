const fact = (nb) => {
	let i = nb - 1
	while(i > 1) {
		nb *= i
		i--
	}
	return nb
}

let nb = 8

console.log(fact(nb))