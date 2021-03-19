const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

// Serve up public/ftp folder
const serve = serveStatic('src/static', { 'index': ['index.html'] })

// mocked data
const lista = [
  "nostrud",
  "aliquip",
  "laboris",
  "pariatur",
  "esse"
]

// Create server
const server = http.createServer(function onRequest(req, res) {
  if (req.method == 'GET' && req.url == '/list') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(lista))
  } else {
    serve(req, res, finalhandler(req, res))
  }
})

// Listen
server.listen(3000)