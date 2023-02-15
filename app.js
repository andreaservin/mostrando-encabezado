const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(JSON.stringify(req.headers['user-agent']))
  res.send(`<p>${JSON.stringify(req.headers)}</p>`)
})

app.listen(3000, () => console.log('Listening on port 3000!'))
