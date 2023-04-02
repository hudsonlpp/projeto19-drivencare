import express, { json } from 'express'
import cors from 'cors'
// import routes from './routes/routes.js'

const app = express()

app.use(json())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port: ${process.env.PORT ? process.env.PORT : 5000}`)
})