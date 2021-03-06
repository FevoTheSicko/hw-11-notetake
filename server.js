const express = require('express')
const bodyParser = require('body-Parser')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000




app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})