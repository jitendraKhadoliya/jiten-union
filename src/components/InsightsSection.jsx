import InsightsLeft from '../assets/InsightsLeft.png'
import InsightsRight from '../assets/InsightsRight.png'

const InsightsSection = ({id}) => {
    return (
      <section id={id} className="bg-[#14210F] text-white py-16 px-6 lg:px-20">
        <div className="container mx-auto ">
          {/* Title */}
          <h2 className="text-4xl font-bold">
            Gain Insights from <br />
            <span className="text-[#C8FF33]">Diverse Cultures Worldwide</span>
          </h2>
          <p className="text-lg mt-4 max-w-2xl ">
            Get exposed to a multitude of experiences – from local bazaars to global 
            conglomerates, across both developed and developing countries.
          </p>
  
          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Left Image */}
            <div className="relative group overflow-hidden">
              <img
                src={InsightsLeft}
                alt="Business Immersions"
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
                <h3 className="text-lg font-semibold">Business Immersions</h3>
                <p className="text-sm">City Sky Academy</p>
              </div>
            </div>
  
            {/* Right Image */}
            <div className="relative group overflow-hidden">
              <img
                src={InsightsRight}
                alt="Cultural Immersions"
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
                <h3 className="text-lg font-semibold">Cultural Immersions</h3>
                <p className="text-sm">Witness a live IPO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default InsightsSection;
  