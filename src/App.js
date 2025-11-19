import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">🌱 Seeds Gallery</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition">Home</a>
              <a href="#seeds" className="text-gray-700 hover:text-primary-600 transition">Seeds</a>
              <a href="#fertilizers" className="text-gray-700 hover:text-primary-600 transition">Fertilizers</a>
              <a href="#sell" className="text-gray-700 hover:text-primary-600 transition">Sell</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Grow Your Garden with
            <span className="text-primary-600"> Premium Seeds</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover a wide variety of flower seeds and organic fertilizers. 
            Buy quality seeds or sell your own harvest. Your garden paradise starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg">
              Browse Seeds
            </button>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition">
              Sell Your Seeds
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Seeds Gallery?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best quality seeds and fertilizers for your gardening needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌺</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality Seeds</h4>
              <p className="text-gray-600">
                Hand-picked, high-germination rate seeds from trusted suppliers worldwide
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Organic Fertilizers</h4>
              <p className="text-gray-600">
                Natural, eco-friendly fertilizers to help your plants thrive and bloom
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🛒</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Buy & Sell Platform</h4>
              <p className="text-gray-600">
                Easy marketplace to buy seeds or sell your own harvest to fellow gardeners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seeds Section */}
      <section id="seeds" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Popular Flower Seeds</h3>
            <p className="text-gray-600">Explore our collection of beautiful flower seeds</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sunflower Seeds', price: '$4.99', emoji: '🌻' },
              { name: 'Rose Seeds', price: '$6.99', emoji: '🌹' },
              { name: 'Lavender Seeds', price: '$5.99', emoji: '💜' },
              { name: 'Tulip Bulbs', price: '$7.99', emoji: '🌷' },
              { name: 'Marigold Seeds', price: '$3.99', emoji: '🌼' },
              { name: 'Daisy Seeds', price: '$4.49', emoji: '🌼' },
              { name: 'Orchid Seeds', price: '$9.99', emoji: '🌸' },
              { name: 'Pansy Seeds', price: '$4.99', emoji: '🌺' },
            ].map((seed, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 text-center">
                  <div className="text-5xl mb-4">{seed.emoji}</div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{seed.name}</h4>
                  <p className="text-primary-600 font-bold text-lg mb-3">{seed.price}</p>
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fertilizers Section */}
      <section id="fertilizers" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Organic Fertilizers</h3>
            <p className="text-gray-600">Nourish your plants with our premium organic fertilizers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Compost Fertilizer', description: 'Rich organic compost for all plants', price: '$12.99', size: '5 lbs' },
              { name: 'Liquid Plant Food', description: 'Fast-acting liquid fertilizer', price: '$15.99', size: '1 Liter' },
              { name: 'Bone Meal', description: 'High phosphorus for root development', price: '$18.99', size: '4 lbs' },
            ].map((fertilizer, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{fertilizer.name}</h4>
                <p className="text-gray-600 mb-4">{fertilizer.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary-600 font-bold text-lg">{fertilizer.price}</p>
                    <p className="text-sm text-gray-500">{fertilizer.size}</p>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Section */}
      <section id="sell" className="py-16 bg-gradient-to-r from-primary-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Sell Your Seeds</h3>
            <p className="text-gray-600 mb-8">
              Have quality seeds to share? Join our marketplace and connect with fellow gardeners. 
              List your seeds easily and start selling today.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📝</div>
                  <h4 className="font-semibold mb-2">List Your Seeds</h4>
                  <p className="text-sm text-gray-600">Create a listing in minutes</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">👥</div>
                  <h4 className="font-semibold mb-2">Reach Buyers</h4>
                  <p className="text-sm text-gray-600">Connect with garden enthusiasts</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h4 className="font-semibold mb-2">Earn Money</h4>
                  <p className="text-sm text-gray-600">Get paid for your quality seeds</p>
                </div>
              </div>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition">
                Start Selling Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About Seeds Gallery</h3>
            <p className="text-gray-600 mb-6">
              Seeds Gallery is your trusted partner in gardening. We specialize in providing 
              high-quality flower seeds and organic fertilizers to help you create beautiful gardens. 
              Our platform also connects seed sellers with buyers, creating a vibrant community 
              of gardening enthusiasts.
            </p>
            <p className="text-gray-600">
              Whether you're a beginner gardener or a seasoned expert, we have everything you need 
              to grow and flourish. Join thousands of happy customers who trust Seeds Gallery for 
              their gardening needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">🌱 Seeds Gallery</h4>
              <p className="text-gray-400">
                Your one-stop shop for premium seeds and fertilizers
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#seeds" className="hover:text-white transition">Seeds</a></li>
                <li><a href="#fertilizers" className="hover:text-white transition">Fertilizers</a></li>
                <li><a href="#sell" className="hover:text-white transition">Sell</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Seeds Gallery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

