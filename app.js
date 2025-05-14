const express = require('express')
const app = express()
const path = require('node:path');
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter)
app.use('/', indexRouter)

const PORT = 3000
app.listen(PORT, ()=>{
	console.log(`Running mini message board - listening on port ${PORT}!`)
})