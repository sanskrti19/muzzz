import React from 'react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row justify-between items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-24 max-w-7xl mx-auto"
      >
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug mb-8 tracking-tighter">
            Music for <br className="hidden sm:inline" />
            everyone.
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            {/* UPDATED: Changed button to an anchor tag linking to #login */}
            <a
              href="#login"
              className="bg-black text-white px-8 py-3 font-semibold rounded-lg shadow-xl transform transition duration-300 hover:bg-gray-800 hover:scale-105 w-full sm:w-auto text-center"
            >
              Try it free
            </a>
            <a
              href="#about" // Internal hash link
              className="text-gray-500 font-medium hover:text-muzz-red transition duration-300 text-sm sm:text-base"
            >
              Learn more &rarr;
            </a>
          </div>
        </div>

         
        <div
          className="flex flex-row space-x-4 sm:space-x-8 mt-16 lg:mt-0 lg:w-1/2 justify-center items-center p-4"
        >
         
          <div
            className="hidden sm:block bg-gray-50 shadow-lg rounded-2xl p-4 sm:p-6 w-40 sm:w-64 max-w-[280px] hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <img
              src="https://stories.freepiklabs.com/api/vectors/music/rafiki/render?color=&background=complete&hide="
              alt="Dancing Illustration"
              className="rounded-xl mb-4 w-full h-auto"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/FF5733/ffffff?text=Music+Illustration" }}
            />
            <h3 className="font-bold text-gray-900 text-lg mb-1">
                Live Concerts
            </h3>
            <p className="text-sm text-gray-500">Global Artists</p>
          </div>

          
          <div
            className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 w-64 sm:w-72 max-w-[320px] hover:shadow-muzz-red/50 transition duration-300 transform lg:translate-y-4 border-2 border-muzz-red/10"
          >
            <img
              src="https://stories.freepiklabs.com/api/vectors/recording/amico/render?color=&background=complete"
              alt="Singing Illustration"
              className="rounded-xl mb-4 w-full h-auto"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/4CAF50/ffffff?text=Recording+Illustration" }}
            />
            <h3 className="font-extrabold text-gray-900 text-xl mb-1">
              Today's Country
            </h3>
            <p className="text-sm text-muzz-red font-semibold mb-3">Apple Music Country</p>
            <p className="text-gray-600 text-sm">
              Discover all the ways you can showcase content on Music, globally and locally.
            </p>
          </div>
        </div>
      </section>
      
      
      <div className="h-16 lg:h-24"></div>
    </>
  );
};

export default HomePage;
