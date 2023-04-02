import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const databaseConnection = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

export default databaseConnection