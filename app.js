const express = require('express')

const app = express();

app.get('/',(req,res)=>{
res.status(200).send('Health check ok from dev branch')
})

app.listen(3000,()=>{
console.log('server is listening')
})