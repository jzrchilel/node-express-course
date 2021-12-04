const express = require('express')
const app = express()

const mockUserData = [
	{ name: 'Mark' },
	{ name: 'Jill' }
]

app.get('/users', (req, res) => {
	res.json({
		success: true,
		message: 'successfully got user. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id', (req, res) => {
	res.json({
		success: true,
		message: 'got one user',
		users: req.params.id
	})
})

app.listen(8000, () => {
	console.log('server is running')
})

