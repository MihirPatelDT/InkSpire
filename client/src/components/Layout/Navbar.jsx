import { Link, useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { RiArrowDropDownLine } from "react-icons/ri"

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/">
              <p className="cursor-pointer">Home</p>
            </Link>
            <button
              onClick={() => navigate("/buycredit")}
              className="flex items-center gap-2 bg-violet-200 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer ml-4"
            >
              <img className="w-5" src={assets.credit_star} alt="Credits" />
              <p className="text-xs sm:text-sm font-medium text-gray-900">
                Credits left : {credit}
              </p>
            </button>
            <p className="text-gray-900 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img
                className="w-10 drop-shadow"
                src={assets.profile_icon}
                alt="User Profile"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-gray-900 rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10 text-gray-900 font-medium "
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5 relative">
            <Link to="/">
              <p className="cursor-pointer">Home</p>
            </Link>

            <div className="relative inline-block">
              {/* Trigger Button */}
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p>Products</p>
                <RiArrowDropDownLine
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <div className="flex justify-center items-center hover:bg-gradient-to-b from-purple-100 to-indigo-50">
                        <img
                          src="/text_image.png"
                          alt="text-to-speech"
                          width={30}
                        />
                        <Link
                          to="/"
                          className="block px-4 py-2 ml-[-10px]"
                          onClick={() => setIsOpen(false)}
                        >
                          Text-to-Image
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-center items-center hover:bg-gradient-to-b from-purple-100 to-indigo-50 ">
                        <img
                          src="/remove_image.png"
                          alt="remove background"
                          width={30}
                          className="ml-3"
                        />
                        <Link
                          to="/background-removal"
                          className="block px-4 py-2 hover:bg-gradient-to-b from-purple-100 to-indigo-50"
                          onClick={() => setIsOpen(false)}
                        >
                          Background Removal
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <p
              onClick={() => navigate("/buycredit")}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-slate-800 text-white py-2 px-7 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
