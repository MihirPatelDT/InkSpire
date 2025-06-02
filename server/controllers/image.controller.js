import { User } from "../models/user.model.js"
import FormData from "form-data"
import axios from "axios"

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body
    const userId = req.userId

    const user = await User.findById(userId)

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" })
    }

    if (user.creditBalance === 0 || user.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      })
    }

    const formData = new FormData()
    // console.log(formData)

    formData.append("prompt", prompt)

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    )

    const base64Image = Buffer.from(data, "binary").toString("base64")
    const resultImage = `data:image/png;base64,${base64Image}`

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        creditBalance: user.creditBalance - 1,
      },
      { new: true }
    )
    console.log(updatedUser)

    if (updatedUser) {
      return res.json({
        success: true,
        message: "Image Sucessfully Generated",
        creditBalance: updatedUser.creditBalance,
        resultImage,
      })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
