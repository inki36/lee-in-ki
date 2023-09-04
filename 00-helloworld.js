const http = require('http')
const port = process .env.PORT || 3000
const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Contend-Type' : 'text/plain'})
    res.end('hello World')
})

server.listen(port, () => console.log('server started on port' ${port};
'press Ctrl-C to terminate...'))

