import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4 lg:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={logo} alt="New Experience" className="w-full max-w-md" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link to="home" smooth={true} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} className="cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} className="cursor-pointer">
              Program
            </Link>
          </li>
          <li>
            <Link to="masters" smooth={true} className="cursor-pointer">
              Masters
            </Link>
          </li>
          <li>
            <Link to="admissions" smooth={true} className="cursor-pointer">
              Admissions
            </Link>
          </li>
        </ul>

        {/* Right Section: Courses & Apply Now */}
        <div className="hidden lg:flex space-x-4">
          <button className="border border-gray-500 px-4 py-2  hover:bg-gray-100 transition">
            Courses
          </button>
          <button className="bg-[#B8EF43] text-black px-4 py-2  hover:bg-lime-500 transition">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link to="home" smooth={true} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="program" smooth={true} onClick={() => setIsOpen(false)}>
                Program
              </Link>
            </li>
            <li>
              <Link to="masters" smooth={true} onClick={() => setIsOpen(false)}>
                Masters
              </Link>
            </li>
            <li>
              <Link
                to="admissions"
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Admissions
              </Link>
            </li>
            <li>
              <button className="border border-gray-500 px-4 py-2  w-full">
                Courses
              </button>
            </li>
            <li>
              <button className="bg-lime-400 text-black px-4 py-2  w-full">
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
