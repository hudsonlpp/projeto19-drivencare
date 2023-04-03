import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const dataBase = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

export default dataBase