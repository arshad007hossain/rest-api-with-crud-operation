const  express = require('express')
const app = express()
const userRoute = require('./Routes/routes')

const port = 5000
app.use(express.json())
app.use('/users',userRoute)

app.listen(port, (req,res)=> {
    console.log(`your app is listening on ${port}`)
})