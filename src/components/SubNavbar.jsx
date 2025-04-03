import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-scroll";

const sections = [
  { id: "curriculum", label: "Term Wise Curriculum" },
  { id: "subjects", label: "Subjects" },
  { id: "week", label: "Week at Tetr" },
  { id: "apply", label: "Apply Now" },
];

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  return (
    <div className=" py-3 px-6 mt-16 lg:mt-20">
      <div className="container mx-auto">
        {/* Desktop Sub-Nav */}
        <ul className="hidden lg:flex justify-center space-x-8">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                offset={-120}
                duration={500}
                className={`cursor-pointer pb-2 transition-all duration-300 ${
                  activeSection === id
                    ? "border-b-2 border-orange-500 text-black font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveSection(id)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center bg-white p-3 shadow rounded-lg"
          >
            <span className="font-semibold">Menu</span>
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {isOpen && (
            <ul className="mt-2 bg-white shadow-md rounded-lg flex flex-col items-center py-3 space-y-3">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    to={id}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeSection === id
                        ? "text-orange-500 font-semibold"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveSection(id);
                      setIsOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
