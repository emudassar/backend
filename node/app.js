const http = require('http')

const requestListners = (req, res) => {
  console.log(req);
}

const server = http.createServer(requestListners)

PORT = 3000

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})

