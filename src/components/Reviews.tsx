
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing! The crispy chicken was perfectly seasoned and the service was outstanding. Will definitely be back!",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9d4b0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      comment: "Best chicken restaurant in town! The buffalo wings are incredible and the staff is so friendly. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 4,
      comment: "Great food and atmosphere! The chicken tenders were crispy and delicious. Perfect place for a family dinner.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={20} 
        className={`${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-orange-500 text-white py-8 px-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">Join Our Happy Customers!</h3>
            <p className="mb-4">Experience the best chicken dishes in town</p>
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
