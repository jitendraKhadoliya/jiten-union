import React from "react";

const Section = ({ id, title, content }) => {
  return (
    <section id={id} className="p-10 border-b border-gray-200">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
    </section>
  );
};

export default Section;
