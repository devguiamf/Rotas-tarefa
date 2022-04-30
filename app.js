const http = require('http')
const server = require('./config/server.js')

http.createServer(server).listen(server.get('porta'),function() {
    console.log('Servidor rodando na porta ' + server.get('url') + server.get('porta'))
})

