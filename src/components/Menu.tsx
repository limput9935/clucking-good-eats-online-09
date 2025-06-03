
const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Crispy Fried Chicken",
      description: "Golden crispy chicken pieces with our special blend of spices",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Buffalo Wings",
      description: "Spicy buffalo wings served with cool ranch dipping sauce",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Chicken Tenders",
      description: "Tender chicken strips breaded and fried to perfection",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Grilled Chicken Breast",
      description: "Juicy grilled chicken breast with herbs and lemon",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Chicken Burger",
      description: "Crispy chicken patty with fresh lettuce and mayo",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "BBQ Chicken Wings",
      description: "Smoky BBQ glazed wings with a tangy kick",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of chicken dishes, crafted with the finest ingredients and cooked to perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-xl font-bold text-orange-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
