const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello World!dasfadfasdf')
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/about', (req, res) => {
  //res.send('Hello World!dasfadfasdf')
  res.sendFile(path.join(__dirname, 'views/about.html'))
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})