const http = require('http')

const requestListners = (req, res) => {
  console.log(req.url);

  if (req.url == '/'){
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Request and Response</title></head>')
  res.write('<body><h1>Welcome to home page</h1></body>')
  res.write('</html>')
  return res.end()
  } else if (req.url == '/products'){
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Request and Response</title></head>')
  res.write('<body><h1>This is product page</h1></body>')
  res.write('</html>')
  return res.end()
  }
  
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Request and Response</title></head>')
  res.write('<body><h1>Server is running....</h1></body>')
  res.write('</html>')
  return res.end()
}

const server = http.createServer(requestListners)

PORT = 3000

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})

