
import { Star, Heart, ThumbsUp } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah the Chicken Queen",
      rating: 5,
      comment: "OMG! This place is INSANE! The crispy chicken literally made me cry tears of joy! I'm OBSESSED! 😭🔥",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9d4b0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      emoji: "👸"
    },
    {
      id: 2,
      name: "Mike the Flavor Hunter",
      rating: 5,
      comment: "DUDE! These buffalo wings are from another PLANET! My taste buds are still dancing! This is MADNESS! 🕺💀",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      emoji: "🕺"
    },
    {
      id: 3,
      name: "Emily the Food Goddess",
      rating: 5,
      comment: "I've found my HAPPY PLACE! The chicken tenders are LIFE-CHANGING! My family thinks I'm crazy but WHO CARES?! 🤪⚡",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      emoji: "🤪"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={24} 
        className={`${index < rating ? 'text-yellow-400 fill-current animate-pulse' : 'text-gray-300'}`} 
        style={{animationDelay: `${index * 0.1}s`}}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 rotate-45 opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-orange-300 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-black text-sm mb-4 transform -rotate-2">
            <Heart className="w-5 h-5 mr-2 text-red-500 animate-pulse" />
            CUSTOMER LOVE LETTERS
            <Heart className="w-5 h-5 ml-2 text-red-500 animate-pulse" />
          </div>
          <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
            <span className="block">PEOPLE ARE</span>
            <span className="block text-yellow-300 transform rotate-1">GOING CRAZY! 🤯</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-bold">
            Don't believe us? Check out these WILD reactions from our customers! 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={review.id} className={`bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 ${index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'} border-4 border-yellow-400`}>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400"
                  />
                  <div className="absolute -top-2 -right-2 bg-black text-yellow-400 p-1 rounded-full text-lg animate-bounce">
                    {review.emoji}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-black text-gray-800 text-lg">{review.name}</h3>
                  <div className="flex mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600 font-bold text-sm">VERIFIED CRAZY CUSTOMER</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-2xl">
                <p className="text-gray-800 font-bold italic text-lg leading-relaxed">"{review.comment}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-yellow-400 text-black py-10 px-8 rounded-3xl transform -rotate-1 shadow-2xl border-4 border-black">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-4xl font-black mb-4">JOIN THE CHICKEN REVOLUTION!</h3>
            <p className="mb-6 font-bold text-xl">Become part of our CRAZY chicken family!</p>
            <button className="bg-black text-yellow-400 hover:bg-gray-800 px-12 py-4 rounded-full font-black text-xl transition-all duration-200 transform hover:scale-110 hover:rotate-3 border-4 border-black shadow-lg">
              🚀 GET MY CHICKEN FIX!
            </button>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full font-black text-sm transform rotate-6">
                💯 SATISFACTION GUARANTEED!
              </div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full font-black text-sm transform -rotate-6">
                🔥 FLAVOR EXPLOSION!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
