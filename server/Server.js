const app = require('./App')
const db = require('./Database')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.SERVER_PORT || 4002

const DBConnection = async () => {
  try {
    await db.authenticate()
    console.log('Database connection has been established successfully.')
    await db.sync({ force: false })
    console.log('All models were synchronized successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
app.listen(PORT, DBConnection(), () =>
  console.log(`Server up and running on port: ${PORT}`)
)
