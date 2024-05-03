
import express from 'express'
import apiRoutes from "./routes/routes.js"
import 'dotenv/config'
const app = express()
const port = process.env.PORT || 3000;

//ENDPOINTS 
app.use('/apismart', apiRoutes)

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})
