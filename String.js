function f(arr) {
	return arr.map((e) => e.length).reduce((total, e) => total + e) / arr.length
}

function mapShowOff(arr) {
	let tmpArr = []

	for (let i = 0; i < arr.length; i++) {
		tmpArr.push(arr[i].length)
	}

	return tmpArr
}

console.log(f([ 'aaa', 'oo', 'uuu' ]))
