import express from "express"
import { generateImage } from "../controllers/image.controller.js"
import { userAuth } from "../middlewares/auth.js"

export const imageRouter = express.Router()

imageRouter.post("/generate-image",userAuth ,generateImage)
