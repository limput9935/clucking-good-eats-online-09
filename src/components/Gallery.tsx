
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Gallery = () => {
  const { isVisible: headerVisible, elementRef: headerRef } = useScrollTrigger();
  const { isVisible: gridVisible, elementRef: gridRef } = useScrollTrigger();
  const { isVisible: ctaVisible, elementRef: ctaRef } = useScrollTrigger();

  const galleryImages = [
    {
      id: 1,
      src: "https://www.licious.in/blog/wp-content/uploads/2019/05/Drumsticks-liquidation-plan-05.jpg",
      alt: "Crispy Fried Chicken"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Buffalo Wings"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chicken Tenders"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Grilled Chicken"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chicken Burger"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "BBQ Wings"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white via-gray-100 to-white relative overflow-hidden">
      {/* Funky background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-black rotate-45 opacity-25 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="inline-block bg-black text-yellow-400 px-6 py-2 rounded-full font-black text-sm mb-4">
            PHOTO GALLERY
          </div>
          <h2 className="text-6xl font-black text-black mb-6 drop-shadow-lg">
            <span className="block">FEAST YOUR</span>
            <span className="block text-yellow-500">EYES!</span>
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto font-bold">
            Warning: These photos might cause EXTREME hunger! View at your own risk!
          </p>
        </div>

        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
          gridVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}>
          {galleryImages.map((image, index) => (
            <div key={image.id} className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-black`}>
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="text-center">
                  <p className="text-yellow-400 text-xl font-black drop-shadow-lg transform hover:scale-110 transition-transform duration-200">
                    {image.alt.toUpperCase()}!
                  </p>
                </div>
              </div>
              {index % 2 === 0 && (
                <div className="absolute top-4 right-4 bg-black text-yellow-400 px-2 py-1 rounded-full font-black text-xs animate-bounce">
                  WOW!
                </div>
              )}
            </div>
          ))}
        </div>

        <div ref={ctaRef} className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          ctaVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="bg-black text-yellow-400 py-8 px-6 rounded-3xl shadow-2xl border-4 border-yellow-400">
            <h3 className="text-4xl font-black mb-4">SHARE THE MADNESS!</h3>
            <p className="mb-6 font-bold text-lg">Tag us in your chicken adventures!</p>
            <div className="flex justify-center space-x-4">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-black">#ChickenMadness</span>
              <span className="bg-white text-black px-4 py-2 rounded-full font-black">#CrispyGoodness</span>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-black">#FlavorExplosion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
