const express = require('express')
const db = require('./db')
const app = express()
const port = 5200

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/user', async(req, res) => {

  const [rows] = await db.query('SELECT * FROM employee');
  res.send(rows);
    
    
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})