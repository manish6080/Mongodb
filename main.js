const express = require('express')
let app = express()
let db = require('./databaseConfig.js')
let userRoute = require('./routes/userRoutes.js')
app.use(express.json())

db()
.then(()=>{
    console.log("database connected");

    
app.listen(4000, ()=>{
    console.log("server is runing at:4000");
})

app.use('/api', userRoute)

})
.catch((err)=>{
    console.log(err);
})
