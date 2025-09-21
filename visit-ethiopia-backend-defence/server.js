import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './config/db.js'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config.env' })
}

// ✅ Use environment variable for port with a fallback
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

// ✅ Connect to MongoDB once when the function is initialized
connectDB()

// ✅ Export app instead of listening to a port
export default app
