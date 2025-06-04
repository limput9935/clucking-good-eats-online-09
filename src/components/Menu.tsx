const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "CRISPY BOMB CHICKEN",
      description: "Golden crispy chicken pieces with our SECRET spice blend that'll blow your mind!",
      price: "$12.99",
      image: "https://www.licious.in/blog/wp-content/uploads/2019/05/Drumsticks-liquidation-plan-05.jpg"
    },
    {
      id: 2,
      name: "BUFFALO BEAST WINGS",
      description: "Spicy buffalo wings that pack a PUNCH! Served with our legendary ranch sauce",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "TENDER MADNESS STRIPS",
      description: "Tender chicken strips breaded with INSANE crunch factor - you'll be addicted!",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "GRILLED PERFECTION",
      description: "Juicy grilled chicken breast with herbs that'll transport you to FLAVOR TOWN!",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "CHICKEN BURGER BEAST",
      description: "Crispy chicken patty stacked HIGH with fresh goodies - it's a MONSTER!",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "BBQ SMOKY DEMONS",
      description: "Smoky BBQ glazed wings with a tangy kick that'll haunt your dreams!",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rotate-45 opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-sm mb-4">
            MENU MADNESS
          </div>
          <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
            <span className="block">OUR CRAZY</span>
            <span className="block text-yellow-400">CHICKEN MENU!</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-bold">
            Get ready for the WILDEST chicken dishes that'll make your taste buds DANCE!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={item.id} className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-4 ${index % 2 === 0 ? 'border-yellow-400' : 'border-black'}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-black text-sm">
                  POPULAR!
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-gray-800 leading-tight">{item.name}</h3>
                  <span className="text-2xl font-black text-black bg-yellow-400 px-3 py-1 rounded-full">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-6 font-semibold">{item.description}</p>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-black to-gray-800 text-yellow-400 py-3 px-6 rounded-full font-black text-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                    LOOKS DELICIOUS!
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-yellow-400 text-black py-12 px-6 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Enhanced decorative elements */}
            
            {/* Bottom left decorative section */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-tr-full"></div>
            <div className="absolute bottom-6 left-6 flex flex-col space-y-2">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center transform rotate-12 animate-bounce">
                <span className="text-yellow-400 text-2xl">🔥</span>
              </div>
              <div className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-black transform -rotate-12">
                HOT & FRESH!
              </div>
            </div>

            {/* Bottom right decorative section */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-black opacity-10 rounded-tl-full"></div>
            <div className="absolute bottom-6 right-6 flex flex-col items-end space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">⭐</span>
                  </div>
                ))}
              </div>
              <div className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-black transform rotate-12">
                5 STAR RATED!
              </div>
            </div>

            {/* Top decorative elements */}
            <div className="absolute top-4 left-1/4 w-8 h-8 bg-black rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-4 right-1/4 w-6 h-6 bg-black rounded-full opacity-30 animate-bounce"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 left-16 transform rotate-45">
              <div className="w-4 h-4 bg-black opacity-25"></div>
            </div>
            <div className="absolute top-8 right-16 transform -rotate-45">
              <div className="w-4 h-4 bg-black opacity-25"></div>
            </div>
            
            {/* Main content with enhanced spacing */}
            <div className="relative z-10 pt-6 pb-8">
              <h3 className="text-5xl font-black mb-6 drop-shadow-lg">HUNGRY YET?</h3>
              <p className="mb-8 font-bold text-xl max-w-md mx-auto leading-relaxed">
                These dishes are CALLING your name! Join thousands of happy customers!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-black text-yellow-400 hover:bg-gray-800 px-16 py-5 rounded-full font-black text-2xl transition-all duration-300 transform hover:scale-110 border-4 border-black shadow-xl hover:shadow-2xl">
                  LET'S ORDER NOW!
                </button>
                
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="bg-black text-yellow-400 px-4 py-2 rounded-full font-black text-sm transform hover:scale-105 transition-all">
                    ⚡ FAST DELIVERY
                  </div>
                  <div className="bg-black text-yellow-400 px-4 py-2 rounded-full font-black text-sm transform hover:scale-105 transition-all">
                    💯 SATISFACTION GUARANTEED
                  </div>
                </div>
              </div>
              
              {/* Additional trust signals */}
              <div className="mt-8 flex justify-center space-x-8 text-black font-bold">
                <div className="text-center">
                  <div className="text-3xl font-black">1000+</div>
                  <div className="text-sm">HAPPY CUSTOMERS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black">30MIN</div>
                  <div className="text-sm">DELIVERY TIME</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black">24/7</div>
                  <div className="text-sm">AVAILABLE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
