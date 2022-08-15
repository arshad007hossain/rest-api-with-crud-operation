const express = require('express')
const {v4:uuidv4 } = require('uuid');
const router = express.Router()

let users = []

router.get('/', (req,res) => {
    res.send(users)
})

router.post('/',(req,res)=> {
    const user = req.body
    users.push({...user, id: uuidv4()})
    res.send('data has been added')
})
router.get('/:id',(req,res)=> {
    const {id} = req.params
    const findUser = users.find((user)=> user.id === id)
    res.send(findUser)
 })

router.delete('/:id',(req,res)=> {
    const {id} = req.params
    users = users.filter((user)=> user.id !== id)
    res.send(users)
})

router.patch('/:id',(req,res)=> {
    const {id} = req.params
    const {name, email} = req.body
    const user = users.find((user)=> user.id===id)

    if(name) user.name = name
    if(email) user.email = email
    res.send(user)
})

module.exports = router