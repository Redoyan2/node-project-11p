const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Running my node project')
})

const users = [
    {id: 1, name: 'shakil', email: 'sakil@gmail.com'},
    {id: 2, name: 'shakil2', email: 'sakil@gmai2.com'},
    {id: 3, name: 'shakil3', email: 'sakil@gmai3.com'}
]

app.get('/users', (req, res)=>{
    res.send(users)
})

app.get('/user/:id', (req, res)=>{
  const id= parseInt(req.params.id);
  const user = users.find(u=>u.id===id)
  res.send(user);
})

app.post('/user', (req, res)=>{
  const user = req.body;
  user.id = users.length+1;
  users.push(user)
  res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port`, port)
})