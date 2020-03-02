const size = 10

for (let i = 0; i < size; i++) {
	let str = ''
	for (let j = 0; j < size; j++) {
		if ((i + j) % 2 === 1) {
			str += '#'
		} else {
			str += ' '
		}
	}
	console.log(str)
}
