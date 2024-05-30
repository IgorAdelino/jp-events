import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log('aqui')
    return cached.conn
  }

  console.log('Opa')

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

  cached.promise = mongoose.connect(MONGODB_URI, {
    dbName: 'evently',
    bufferCommands: false,
  })

  cached.conn = await cached.promise

  return cached.conn
}
