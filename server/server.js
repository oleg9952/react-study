const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.static(path.join(__dirname, '../client/public')))

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))