const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

// Serve up public/ftp folder
const serve = serveStatic('src/static', { 'index': ['index.html'] })

// mocked service
const getList = require('./api/name_list');

// Create server
const server = http.createServer(function onRequest(req, res) {
  if (req.method == 'GET' && req.url == '/list') {
    res.setHeader('Content-Type', 'application/json')
    const data = getList()
    res.end(data)
  } else {
    serve(req, res, finalhandler(req, res))
  }
})

// Listen
server.listen(3000)