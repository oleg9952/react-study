const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../client/public')))

app.use((err, req, res, next) => {
    res.status(500).send({ status: 500, error: err })
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))