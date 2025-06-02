import logo from "./logo.svg"
import logo_icon from "./logo_icon.svg"
import facebook_icon from "./facebook_icon.svg"
import instagram_icon from "./instagram_icon.svg"
import twitter_icon from "./twitter_icon.svg"
import star_icon from "./star_icon.svg"
import rating_star from "./rating_star.svg"
import sample_img_1 from "./sample_img_1.png"
import sample_img_2 from "./sample_img_2.png"
import profile_img_1 from "./profile_img_1.png"
import profile_img_2 from "./profile_img_2.png"
import step_icon_1 from "./step_icon_1.svg"
import step_icon_2 from "./step_icon_2.svg"
import step_icon_3 from "./step_icon_3.svg"
import email_icon from "./email_icon.svg"
import lock_icon from "./lock_icon.svg"
import cross_icon from "./cross_icon.svg"
import star_group from "./star_group.png"
import credit_star from "./credit_star.svg"
import profile_icon from "./profile_icon.png"
import header_img from "./header_img.png"
import header_img2 from "./header_img2.png"

export const assets = {
  logo,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
  header_img,
  header_img2,
}

export const stepsData = [
  {
    title: "Imagine & Input",
    description:
      "Describe anything—from surreal dreams to product concepts—and let your creativity run wild.",
    icon: step_icon_1,
  },
  {
    title: "AI Turns It Real",
    description:
      "Our cutting-edge AI visualizes your prompt into stunning, high-resolution artwork in moments.",
    icon: step_icon_2,
  },
  {
    title: "Download. Share. Inspire.",
    description:
      "Save your masterpiece or share it instantly on your socials—right from your dashboard.",
    icon: step_icon_3,
  },
]

export const testimonialsData = [
  {
    image: profile_img_1,
    name: "Amelia Rivers",
    role: "Digital Artist",
    stars: 5,
    text: `This platform completely changed how I create. It's like having a digital muse at my fingertips.`,
  },
  {
    image: profile_img_2,
    name: "Jordan Lee",
    role: "Marketing Strategist",
    stars: 4,
    text: `We use it for ad creatives and client concepts—it saves hours and sparks fresh ideas every time.`,
  },
  {
    image: profile_img_1,
    name: "Maya Chen",
    role: "Indie Game Developer",
    stars: 5,
    text: `From concept art to environment designs, this tool has become an essential part of my dev pipeline.`,
  },
]

export const plans = [
  {
    id: "Starter",
    price: 9,
    credits: 100,
    desc: "Perfect for exploring creativity and casual generation.",
  },
  {
    id: "Pro",
    price: 49,
    credits: 750,
    desc: "Ideal for creators, freelancers, and small teams.",
  },
  {
    id: "Elite",
    price: 199,
    credits: 5000,
    desc: "Built for agencies, enterprises, and power users.",
  },
]
