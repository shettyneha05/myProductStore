import { CgAddR } from "react-icons/cg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaShoppingCart , FaOpencart} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-500 shadow-md">
      {/* Container for responsive alignment */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center space-x-2">
          <FaOpencart className="text-2xl sm:text-3xl text-white" />
          <span className="text-lg sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-yellow-300 via-pink-300 to-orange-400 py-2 sm:py-4  ">
            Product Store
          </span>
        </div>
        {/* Right: Button Group */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Create Product Button */}
          <Link
            to="/create"
            className="rounded-full p-2 sm:p-3 bg-gradient-to-tl from-pink-400 via-orange-400 to-yellow-300 text-white hover:scale-110 transition"
            title="Create Product"
          >
            <CgAddR className="text-xl sm:text-2xl" />
          </Link>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 sm:p-3 bg-gradient-to-tl from-gray-800 via-indigo-700 to-pink-500 text-white hover:scale-110 transition"
            title="Toggle Theme"
          >
            {isDarkMode ? (
              <MdOutlineLightMode className="text-xl sm:text-2xl text-yellow-300" />
            ) : (
              <MdOutlineDarkMode className="text-xl sm:text-2xl text-indigo-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


