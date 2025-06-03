
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-orange-300 opacity-50">
        <div className="w-6 h-6 rotate-45 border-2 border-current"></div>
      </div>
      <div className="absolute top-40 right-20 text-orange-300 opacity-50">
        <div className="w-4 h-4 rotate-45 border-2 border-current"></div>
      </div>
      <div className="absolute bottom-40 left-20 text-orange-300 opacity-50">
        <div className="w-5 h-5 rotate-45 border-2 border-current"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Satisfy
              <br />
              <span className="text-orange-600">Your</span>
              <br />
              Cravings
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 transform hover:scale-105">
                See Menu
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
                Order Now
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            {/* Orange circle background */}
            <div className="absolute inset-0 bg-orange-400 rounded-full transform scale-110 opacity-80"></div>
            
            {/* Chicken image placeholder */}
            <div className="relative z-10 bg-white rounded-full p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious Fried Chicken" 
                className="w-full h-auto rounded-full object-cover"
              />
            </div>

            {/* Decorative arrow */}
            <div className="absolute -bottom-8 right-20 text-orange-500 animate-bounce">
              <ArrowDown size={32} className="rotate-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Order ribbon */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-yellow-400 text-gray-800 py-3 transform -rotate-2 origin-left">
          <div className="flex items-center justify-center space-x-8 font-bold text-lg">
            <span>ORDER NOW!</span>
            <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
            <span>ORDER NOW!</span>
            <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
            <span>ORDER NOW!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
