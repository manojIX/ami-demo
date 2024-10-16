const app = require('express')();

app.get('*',(req,res)=>{res.send(`This is instance \nClient IP is ${req.ip}\nX-Forwarded-For is ${req.headers['X-Forwarded-For']}` )})

app.listen(80,()=>console.log('server started'))