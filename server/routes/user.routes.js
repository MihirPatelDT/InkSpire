import express from "express"
import {
  loginUser,
  registerUser,
  userCredits,
} from "../controllers/user.controller.js"
import { userAuth } from "../middlewares/auth.js"

export const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/credits", userAuth, userCredits)
