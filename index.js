const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Running my node project')
})

const user = [
    {id: 1, name: 'shakil', email: 'sakil@gmail.com'},
    {id: 2, name: 'shakil2', email: 'sakil@gmai2.com'},
    {id: 3, name: 'shakil3', email: 'sakil@gmai3.com'}
]

app.get('/user', (req, res)=>{
    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port`, port)
})