import http from 'http';
import app  from  './app.js'

const port = 3000
const server = http.createServer(app)


server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})