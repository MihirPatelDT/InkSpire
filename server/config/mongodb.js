import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

export const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected Successfully.")
  })
  await mongoose.connect(`${MONGODB_URI}/InkSpire`)
}
