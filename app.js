const express = require('express');

const app = express();

app.get('/', (req, res) => {
   return res.status(200).send('Health check ok from dev branch');
});

app.get('/test',(req,res)=>{
let n1,n2;
n1=7;
n2=9;
return res.status(200).send({result:`${n1+n2}`})
})

module.exports = app;
