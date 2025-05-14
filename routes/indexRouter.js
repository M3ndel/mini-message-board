const { Router } = require('express')

const indexRouter = Router()

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];


indexRouter.get('/', (req, res) => res.render('index', {messages: messages}))
indexRouter.post('/new', (req, res) => {
	let messageUser = req.body.name
	let messageText = req.body.message
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect('/')
})

module.exports = indexRouter