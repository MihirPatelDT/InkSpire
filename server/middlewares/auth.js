import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

export const userAuth = async (req, res, next) => {
  const { token } = req.headers

  //   console.log(token)

  if (!token) {
    return res.json({ success: false, message: "Not Authorized.Login Again" })
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

    if (tokenDecode.id) {
      req.userId = tokenDecode.id
      next()
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
