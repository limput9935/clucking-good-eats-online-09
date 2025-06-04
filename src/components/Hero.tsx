import { ArrowDown, Zap, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isVisible: titleVisible, elementRef: titleRef } = useScrollTrigger();
  const { isVisible: buttonsVisible, elementRef: buttonsRef } = useScrollTrigger();
  const { isVisible: ratingVisible, elementRef: ratingRef } = useScrollTrigger();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full opacity-70 animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-black rotate-45 opacity-60 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(45deg)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full opacity-50 animate-ping"
          style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
        ></div>
        <div 
          className="absolute top-60 left-1/4 w-8 h-8 bg-black rotate-12 opacity-40"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-1/3 w-14 h-14 bg-white rounded-full opacity-50"
          style={{ transform: `translateY(${-scrollY * 0.25}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-20 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text content - order-1 on mobile (top), order-2 on desktop (right) */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="flex items-center justify-center lg:justify-start mb-4 animate-fade-in">
              <Zap className="text-black w-8 h-8 mr-2 animate-bounce" />
              <span className="bg-black text-yellow-400 px-4 py-1 rounded-full font-bold text-sm animate-scale-in">
                FINGER LICKIN' GOOD!
              </span>
            </div>
            
            <div ref={titleRef}>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none transition-all duration-1000 ${
                titleVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}>
                <span 
                  className={`block bg-black text-yellow-400 px-4 py-2 inline-block mb-2 transition-all duration-700 delay-200 ${
                    titleVisible 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform -translate-x-20'
                  }`}
                >
                  CRISPY
                </span>
                <span 
                  className={`block text-black drop-shadow-lg transition-all duration-700 delay-400 ${
                    titleVisible 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-20'
                  }`}
                >
                  CHICKEN
                </span>
                <span 
                  className={`block text-white transition-all duration-700 delay-600 ${
                    titleVisible 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-75'
                  }`}
                >
                  MADNESS!
                </span>
              </h1>
            </div>

            <div ref={buttonsRef} className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-800 delay-800 ${
              buttonsVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}>
              <a href='#menu' className="bg-black hover:bg-gray-800 text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-base sm:text-lg shadow-2xl transform hover:scale-110 transition-all duration-300">
                EXPLORE MENU
              </a>
              <a href='https://www.clover.com/online-ordering/hfcyxe' className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-base sm:text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-black">
                ORDER NOW!
              </a>
            </div>

            <div ref={ratingRef} className={`flex items-center justify-center lg:justify-start mt-8 space-x-2 transition-all duration-800 delay-1000 ${
              ratingVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-black fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
              ))}
              <span className="text-black font-bold ml-2 text-sm sm:text-base">5.0 INSANE RATING!</span>
            </div>
          </div>

          {/* Image section - order-2 on mobile (bottom), order-1 on desktop (left) */}
          <div className="relative flex justify-center items-center order-2 lg:order-1 mb-8 lg:mb-0">
            {/* Circle backgrounds with parallax */}
            <div 
              className="absolute inset-0 flex justify-center items-center"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
            </div>
            <div 
              className="absolute inset-0 flex justify-center items-center"
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
              <div className="w-[400px] h-[300px] lg:w-[750px] lg:h-[568px] bg-yellow-300 rounded-full opacity-55"></div>
            </div>
            
            {/* Desktop image - hidden on mobile */}
            <div 
              className="relative z-10 transform animate-float hidden lg:block"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <img 
                src="/lovable-uploads/fda970c7-51aa-483a-9b38-a90d43c01e56.png" 
                alt="Delicious Chicken Wings on Wooden Board" 
                className="w-[57rem] h-[32rem] object-contain max-w-none"
              />
            </div>

            {/* Mobile image - shown only on mobile with reduced size */}
            <div 
              className="relative z-10 transform animate-float block lg:hidden"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <img 
                src="/lovable-uploads/fda970c7-51aa-483a-9b38-a90d43c01e56.png" 
                alt="Delicious Chicken Wings on Wooden Board" 
                className="w-full h-auto max-w-[300px] object-contain"
              />
            </div>

            {/* Floating elements with parallax */}
            <div 
              className="absolute -top-4 -right-4 bg-black text-yellow-400 p-2 sm:p-3 rounded-full font-black text-xs sm:text-sm animate-bounce z-20"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              HOT!
            </div>
            <div 
              className="absolute -bottom-4 -left-4 bg-white text-black p-2 sm:p-3 rounded-full font-black text-xs sm:text-sm animate-pulse z-20"
              style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
            >
              FRESH!
            </div>
            <div 
              className="absolute -right-8 bg-black text-yellow-400 p-2 rounded-full font-black text-xs z-20"
              style={{ transform: `translateY(${scrollY * 0.1}px)`,top:"89%" }}
            >
              YUM!
            </div>
          </div>
        </div>
      </div>

      {/* Static bottom banner */}
      <div className="absolute bottom-0 left-0 w-full z-20">
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
            transform: translateX(-100px) rotate(-2deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(-2deg);
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
            transform: scale(0.3) rotate(1deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) rotate(1deg);
          }
          70% {
            transform: scale(0.9) rotate(1deg);
          }
          100% {
            transform: scale(1) rotate(1deg);
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
