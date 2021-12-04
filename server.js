const express = require('express')
const app = express()

const mockUserData = [
	{ name: 'Mark' },
	{ name: 'Jill' }
]

app.get('/users', (req, res) => {
	res.json({
		success: true,
		message: 'Succesfully got users. Nice!',
		users: mockUserData
	})
})

app.listen(8000, () => {
	console.log('server is running')
})

