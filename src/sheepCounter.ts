const allSheep: { name: string, color: string }[] = [
	{ name: 'Noa', color: 'blue' },
	{ name: 'Euge', color: 'red' },
	{ name: 'Navidad', color: 'red' },
	{ name: 'Ki Na Ma', color: 'red' },
	{ name: 'AAAAAaaaaa', color: 'red' },
	{ name: 'Nnnnnnnn', color: 'red' }
]

function sheepFilter(color: string, sheep: { name: string, color: string }[], exp: RegExp) {
	return sheep.filter(opt => opt.color === color && opt.name.match(exp))
}

const redSheep = sheepFilter('red', allSheep, /na/i)
console.log(redSheep);
