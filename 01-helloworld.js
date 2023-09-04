const http = require('http')
const port = process.env.PORT || 3000

const server = http.creatServer( (req, res)=>{
    const path = req,url.replace(/\/?(?:\?.*)?$/, ''),tolocalelowercase()
    switch(path) {
        case '':
            res.writeHead(200, { 'Contend-Type' : 'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, { 'contend-Type' : 'text/plain'})
            res.end('About')
            break
        default:
            res.writeHead(404, { 'contend-Type' : 'text/plain'})
            res.end('Not Found')
            break
    }
})
server.listen(port, () => console.log('server started on port ${port};'
'press Ctrl-C to terminate...'))