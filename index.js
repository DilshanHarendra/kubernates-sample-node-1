const express= require('express')
const app = express()


app.get('/',(req, res) => {
    res.status(200).send({
        message:"hello world"
    })
})


app.get('/health',(req, res) => {
    res.status(200)
})



app.listen(8000,console.log("app running on http://localhost:8000"))
