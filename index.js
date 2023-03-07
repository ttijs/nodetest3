const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// van https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/
// om er https van te maken voor pwa
const fs = require('fs')
const https = require('https')
const httpPort = 80
const httpsPort = 443
const key = fs.readFileSync('./certs/localhost.key');
const cert = fs.readFileSync('./certs/localhost.crt');

const server = https.createServer({key: key, cert: cert }, app);
app.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
})


app.get('/', (req, res) => {
  //res.send('Hello World!dasfadfasdf')
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/about', (req, res) => {
  //res.send('Hello World!dasfadfasdf')
  res.sendFile(path.join(__dirname, 'views/about.html'))
})



app.listen(httpPort, () => {
  console.log(`Example app listening on port ${port}`)
})


server.listen(httpsPort, function () {
  console.log(`Listening on port ${httpsPort}!`)
})