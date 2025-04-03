import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { PlayCircleIcon } from "lucide-react";

const HeroSection = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id={id}
      className="bg-[#f8fdf4] py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center mt-10"
    >
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-orange-600 font-semibold text-sm mb-2">
          ● <span className=" text-black">TETR UNDERGRADUATE ADMISSIONS</span>
        </p>
        <h1 className="text-6xl font-bold leading-tight">
          Welcome{" "}
          <span className="bg-lime-500 text-black px-2">Counsellors</span>
        </h1>
        <p className="text-gray-600 mt-4">
          The Admissions Committee deeply values counsellors as essential
          collaborators and partners in guiding students through the college
          selection and application journey.  We've created this space for you
          to find relevant information about Tetr College of Business, our
          admissions process, and resources to share with your students.
        </p>
      </div>

      {/* Right Video Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <iframe
            className="w-full md:w-[600px] h-[350px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/Gp9mtT8uIlw"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <PlayCircleIcon className="w-16 h-16 text-orange-500 bg-white rounded-full shadow-lg" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
        >
          <Dialog.Panel className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/Gp9mtT8uIlw"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </Dialog.Panel>
        </Dialog>
      )}
    </section>
  );
};

export default HeroSection;
