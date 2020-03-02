function findSolution(target) {
	return find(1, { total: '1', i: 0 })

	function find(current, history) {
		if (current == target) {
			return history
		} else if (current > target) {
			return { total: 'fuck off', i: Infinity }
		} else {
			let tmp = min(
				min(
					find(current + 5, { total: `(${history.total} + 5)`, i: history.i + 1 }),
					find(current * 3, { total: `(${history.total} * 3)`, i: history.i + 1 })
				),
				find(current - 2, { total: `(${history.total} - 4)`, i: history.i + 1 })
			)
			return tmp
		}
	}
}
function min(a, b) {
	return a.i < b.i ? a : b
}

console.log(findSolution(23))
