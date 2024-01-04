import express from 'express'
import dotenv from 'dotenv'
const app = express()

const port = 8000

dotenv.config({
    path: './env'
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})