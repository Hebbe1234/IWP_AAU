console.log('Hola')

let expenses = []

function Expense(name, topic, date, amount, currency) {
	this.name = name
	this.topic = topic
	this.date = date
	this.amount = amount
	this.currency = currency
}

expenses.push(new Expense('Jeppe', 'Skærm', '11/02/2020', '2040', 'DKK'))
expenses.push(new Expense('Jonas', 'Stol', '15/02/2020', '100', 'DKK'))
expenses.push(new Expense('Jack', 'faxer kondis', '10/02/2020', '19.95', 'DKK'))
expenses.push(new Expense('Rasmus', 'Mus', '09/02/2020', '475', 'DKK'))
expenses.push(new Expense('Stine', 'Bland selv slik', '11/02/2020', '300', 'DKK'))
expenses.push(new Expense('Alex', 'Mappe', '04/02/2020', '20', 'DKK'))

function addTable(arr) {
	let tableNode = document.createElement('table')
	let trNode = document.createElement('tr')
	tableNode.appendChild(trNode)

	let e = arr[0]

	Object.keys(e).forEach((key) => {
		let th = document.createElement('th')
		th.innerText = key
		trNode.appendChild(th)
	})

	arr.forEach((ev) => {
		let trNode = document.createElement('tr')
		Object.keys(e).forEach((key) => {
			let td = document.createElement('td')
			td.innerText = ev[key]
			trNode.appendChild(td)
		})
		tableNode.appendChild(trNode)
	})

	document.body.appendChild(tableNode)
}

function addFetchedTable() {
	fetch('http://127.0.0.1:3000/expenses').then((res) => res.json()).then((res) => addTable(res))
}

//addTable(expenses)

addFetchedTable()
