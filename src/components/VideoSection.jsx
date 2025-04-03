import React from "react";

const VideoSection = () => {
  return (
    <section id="video" className="p-10 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-800">New Experience</h2>
      <div className="mt-4">
        <iframe
          className="w-full md:w-[600px] h-[350px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/Gp9mtT8uIlw"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoSection;
