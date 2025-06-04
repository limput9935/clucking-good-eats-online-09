
import { ArrowDown, Zap, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 min-h-screen flex items-center relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-black opacity-40"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with larger size */}
          <div className="relative flex justify-center items-center order-1 lg:order-1">
            {/* Circle backgrounds */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[750px] h-[568px] bg-yellow-300 rounded-full opacity-55"></div>
            </div>
            
            {/* Main image container */}
            <div className="relative z-10 transform animate-float">
              <img 
                src="/lovable-uploads/fda970c7-51aa-483a-9b38-a90d43c01e56.png" 
                alt="Delicious Chicken Wings on Wooden Board" 
                className="w-[65rem] h-[36rem] object-contain"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-black text-yellow-400 p-3 rounded-full font-black text-sm animate-bounce z-20">
              HOT!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-black p-3 rounded-full font-black text-sm animate-pulse z-20">
              FRESH!
            </div>
            <div className="absolute -right-8 bg-black text-yellow-400 p-2 rounded-full font-black text-xs z-20" style={{top:"89%"}}>
              YUM!
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <div className="flex items-center justify-center lg:justify-start mb-4 animate-fade-in">
              <Zap className="text-black w-8 h-8 mr-2 animate-bounce" />
              <span className="bg-black text-yellow-400 px-4 py-1 rounded-full font-bold text-sm animate-scale-in">
                FINGER LICKIN' GOOD!
              </span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl font-black mb-6 leading-none">
              <span className="block bg-black text-yellow-400 px-4 py-2 inline-block mb-2 animate-slide-in-left">
                CRISPY
              </span>
              <span className="block text-black drop-shadow-lg animate-slide-in-right">
                CHICKEN
              </span>
              <span className="block text-white animate-bounce-in">
                MADNESS!
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <a href='#menu' className="bg-black hover:bg-gray-800 text-yellow-400 px-8 py-4 rounded-full font-black text-lg shadow-2xl transform hover:scale-110 transition-all duration-300">
                EXPLORE MENU
              </a>
              <a href='https://www.clover.com/online-ordering/hfcyxe' className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-black text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-black">
                ORDER NOW!
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-2 animate-fade-in">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-black fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
              ))}
              <span className="text-black font-bold ml-2">5.0 INSANE RATING!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Static bottom banner */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-black text-yellow-400 py-4">
          <div className="flex items-center font-black text-xl whitespace-nowrap animate-[scroll_20s_linear_infinite]">
            <span className="mx-8">CRISPY GOODNESS!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">CHICKEN PARADISE!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">FLAVOR EXPLOSION!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">CRISPY GOODNESS!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">CHICKEN PARADISE!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
            <span className="mx-8">FLAVOR EXPLOSION!</span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
