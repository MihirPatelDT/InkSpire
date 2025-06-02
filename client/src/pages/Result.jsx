import React, { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { delay, motion } from "motion/react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const Result = () => {
  const [image, setImage] = useState(assets.header_img)
  const [isImageLoaded, setIsImageLoaded] = useState(true)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState("")

  const { generateImage } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (input) {
      const image = await generateImage(input, navigate)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      action=""
      className="flex flex-col lg:min-h-[55vh] items-center lg:mt-50 sm:mt-40 mt-30 sm:min-h-[60vh] min-h-[65vh]"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative">
          <img
            className="max-w-sm rounded-4xl"
            src={image}
            alt="Result Image"
          />
        </div>
        <div
          className={`mt-5 flex items-center justify-center ${
            !loading ? "hidden" : ""
          }`}
        >
          <div
            className="w-[50px] aspect-square p-2 rounded-full bg-[#25b09b] animate-spin"
            style={{
              WebkitMask:
                "conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box",
              mask: "conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box",
              WebkitMaskComposite: "source-out",
              maskComposite: "subtract",
            }}
          ></div>
        </div>
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Descibe what you want to generate ..."
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />
          <button
            type="submit"
            className="bg-slate-800 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false)
              setInput("")
            }}
            className="bg-transparent border border-slate-800 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            className="bg-slate-800 px-10 py-3 rounded-full cursor-pointer"
            href={image}
            download
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default Result
