import { delay, motion } from "motion/react"
import { assets } from "../assets/assets"

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center max-w-7xl">
        <img
          className="w-80 xl:w-96 rounded-lg"
          src={assets.header_img2}
          alt="Description Image"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Unleash your creativity with an AI-powered text-to-image generator.
            Just type a prompt, and watch it transform into a vivid,
            high-quality image in seconds. Whether you're designing,
            storytelling, or just experimenting—turning ideas into visuals has
            never been easier. No design skills needed—just your imagination.
          </p>
          <p className="text-gray-600">
            Create stunning visuals instantly from any text input using advanced
            AI technology. This tool empowers users to bring their ideas to life
            without any artistic skills. Perfect for designers, writers, and
            creators looking to visualize concepts quickly and easily.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
