import React, { useState, useEffect } from 'react';
import Cart from './Cart';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastProduct, setToastProduct] = useState(null);
  const [cartIconBounce, setCartIconBounce] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const seeds = [
    { id: 'seed-1', name: 'Sunflower Seeds', price: '$4.99', emoji: '🌻', color: 'from-yellow-200 to-yellow-400' },
    { id: 'seed-2', name: 'Rose Seeds', price: '$6.99', emoji: '🌹', color: 'from-red-200 to-pink-400' },
    { id: 'seed-3', name: 'Lavender Seeds', price: '$5.99', emoji: '💜', color: 'from-purple-200 to-purple-400' },
    { id: 'seed-4', name: 'Tulip Bulbs', price: '$7.99', emoji: '🌷', color: 'from-pink-200 to-rose-400' },
    { id: 'seed-5', name: 'Marigold Seeds', price: '$3.99', emoji: '🌼', color: 'from-orange-200 to-yellow-400' },
    { id: 'seed-6', name: 'Daisy Seeds', price: '$4.49', emoji: '🌼', color: 'from-white to-yellow-200' },
    { id: 'seed-7', name: 'Orchid Seeds', price: '$9.99', emoji: '🌸', color: 'from-pink-200 to-purple-300' },
    { id: 'seed-8', name: 'Pansy Seeds', price: '$4.99', emoji: '🌺', color: 'from-violet-200 to-purple-400' },
  ];

  const fertilizers = [
    { id: 'fert-1', name: 'Compost Fertilizer', description: 'Rich organic compost for all plants', price: '$12.99', size: '5 lbs', icon: '🌱' },
    { id: 'fert-2', name: 'Liquid Plant Food', description: 'Fast-acting liquid fertilizer', price: '$15.99', size: '1 Liter', icon: '💧' },
    { id: 'fert-3', name: 'Bone Meal', description: 'High phosphorus for root development', price: '$18.99', size: '4 lbs', icon: '🦴' },
  ];

  const addToCart = (product) => {
    const isExisting = cartItems.find((item) => item.id === product.id);
    
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Show toast notification with product details
    setToastProduct(product);
    setToastMessage(isExisting ? `${product.name} quantity updated!` : `${product.name} added to cart!`);
    setShowToast(true);
    
    // Animate cart icon
    setCartIconBounce(true);
    setTimeout(() => setCartIconBounce(false), 600);
    
    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
      setToastProduct(null);
    }, 4000);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(index);
      return;
    }
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].quantity = newQuantity;
      return newItems;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-reverse"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      </div>

      {/* Navigation */}
      <nav className="glass fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="text-4xl float">🌱</div>
              <h1 className="text-3xl font-bold text-gradient bg-clip-text">Seeds Gallery</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Seeds', 'Fertilizers', 'Sell', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-primary-600 transition-all duration-300 relative group font-medium"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleCart}
                className={`relative btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white p-3 rounded-full hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow ${cartIconBounce ? 'cart-bounce' : ''}`}
              >
                <span className="text-2xl">🛒</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </button>
              <button className="btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center fade-in">
          <div className="inline-block mb-6">
            <div className="text-8xl float">🌻</div>
          </div>
          <h2 className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-8 leading-tight">
            Grow Your Garden with
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-emerald-600 to-teal-600">
              Premium Seeds
            </span>
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover a wide variety of flower seeds and organic fertilizers. 
            Buy quality seeds or sell your own harvest. Your garden paradise starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-3d group relative overflow-hidden bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 glow shine">
              <span className="relative z-10">Browse Seeds</span>
            </button>
            <button className="btn-3d group relative overflow-hidden bg-white/90 backdrop-blur-sm text-primary-600 px-10 py-5 rounded-full text-xl font-bold border-2 border-primary-600 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="relative z-10">Sell Your Seeds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-white/60 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scale-in">
            <h3 className="text-5xl font-extrabold text-gray-900 mb-6">Why Choose Seeds Gallery?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best quality seeds and fertilizers for your gardening needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🌺', title: 'Premium Quality Seeds', desc: 'Hand-picked, high-germination rate seeds from trusted suppliers worldwide', delay: '0' },
              { icon: '🌿', title: 'Organic Fertilizers', desc: 'Natural, eco-friendly fertilizers to help your plants thrive and bloom', delay: '200' },
              { icon: '🛒', title: 'Buy & Sell Platform', desc: 'Easy marketplace to buy seeds or sell your own harvest to fellow gardeners', delay: '400' },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-3d group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl text-center hover:from-green-100 hover:to-emerald-100 transition-all duration-500 border border-green-200/50 shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="text-6xl mb-6 float" style={{ animationDelay: `${index * 0.2}s` }}>{feature.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seeds Section */}
      <section id="seeds" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scale-in">
            <h3 className="text-5xl font-extrabold text-gray-900 mb-6">Popular Flower Seeds</h3>
            <p className="text-xl text-gray-600">Explore our collection of beautiful flower seeds</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {seeds.map((seed, index) => (
              <div
                key={index}
                className="card-3d group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${seed.color} p-12 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-7xl mb-4 relative z-10 float" style={{ animationDelay: `${index * 0.1}s` }}>
                    {seed.emoji}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{seed.name}</h4>
                  <p className="text-primary-600 font-bold text-2xl mb-4">{seed.price}</p>
                  <button
                    onClick={() => addToCart(seed)}
                    className="w-full bg-gradient-to-r from-primary-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow shine"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fertilizers Section */}
      <section id="fertilizers" className="relative z-10 bg-white/60 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scale-in">
            <h3 className="text-5xl font-extrabold text-gray-900 mb-6">Organic Fertilizers</h3>
            <p className="text-xl text-gray-600">Nourish your plants with our premium organic fertilizers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {fertilizers.map((fertilizer, index) => (
              <div
                key={index}
                className="card-3d group bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-8 hover:from-emerald-100 hover:via-green-100 hover:to-teal-100 transition-all duration-500 border border-emerald-200/50 shadow-xl hover:shadow-2xl"
              >
                <div className="text-6xl mb-6 float" style={{ animationDelay: `${index * 0.2}s` }}>{fertilizer.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{fertilizer.name}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{fertilizer.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-primary-600 font-bold text-2xl">{fertilizer.price}</p>
                    <p className="text-sm text-gray-500 mt-1">{fertilizer.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(fertilizer)}
                  className="w-full bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-bold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow shine"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Section */}
      <section id="sell" className="relative z-10 py-24 bg-gradient-to-r from-primary-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scale-in">
            <h3 className="text-5xl font-extrabold text-gray-900 mb-6">Sell Your Seeds</h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have quality seeds to share? Join our marketplace and connect with fellow gardeners. 
              List your seeds easily and start selling today.
            </p>
            <div className="glass bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  { icon: '📝', title: 'List Your Seeds', desc: 'Create a listing in minutes' },
                  { icon: '👥', title: 'Reach Buyers', desc: 'Connect with garden enthusiasts' },
                  { icon: '💰', title: 'Earn Money', desc: 'Get paid for your quality seeds' },
                ].map((step, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-5xl mb-4 float" style={{ animationDelay: `${index * 0.2}s` }}>{step.icon}</div>
                    <h4 className="font-bold text-xl mb-2 group-hover:text-primary-600 transition-colors">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
              <button className="btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 glow shine">
                Start Selling Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scale-in">
            <h3 className="text-5xl font-extrabold text-gray-900 mb-8">About Seeds Gallery</h3>
            <div className="glass bg-white/60 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Seeds Gallery is your trusted partner in gardening. We specialize in providing 
                high-quality flower seeds and organic fertilizers to help you create beautiful gardens. 
                Our platform also connects seed sellers with buyers, creating a vibrant community 
                of gardening enthusiasts.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're a beginner gardener or a seasoned expert, we have everything you need 
                to grow and flourish. Join thousands of happy customers who trust Seeds Gallery for 
                their gardening needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-3xl float">🌱</div>
                <h4 className="text-2xl font-bold">Seeds Gallery</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your one-stop shop for premium seeds and fertilizers
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6">Quick Links</h5>
              <ul className="space-y-3 text-gray-400">
                {['Home', 'Seeds', 'Fertilizers', 'Sell'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6">Support</h5>
              <ul className="space-y-3 text-gray-400">
                {['Contact Us', 'FAQ', 'Shipping Info', 'Returns'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6">Connect</h5>
              <ul className="space-y-3 text-gray-400">
                {['Facebook', 'Instagram', 'Twitter', 'Email'].map((social) => (
                  <li key={social}>
                    <a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Seeds Gallery. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && toastProduct && (
        <div className="fixed bottom-8 right-8 z-50 toast-enter">
          <div className="bg-gradient-to-r from-primary-600 via-emerald-600 to-teal-600 text-white px-6 py-5 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[350px] max-w-[400px] border-2 border-white/30 backdrop-blur-sm">
            <div className="text-5xl animate-bounce-in float" style={{ animationDelay: '0s' }}>{toastProduct.emoji || toastProduct.icon || '✅'}</div>
            <div className="flex-1">
              <p className="font-bold text-lg mb-1 text-white">{toastMessage}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-white/95 text-sm">Price: <span className="font-semibold text-white">{toastProduct.price}</span></p>
                <button
                  onClick={() => {
                    setShowToast(false);
                    setIsCartOpen(true);
                  }}
                  className="text-xs bg-white/25 hover:bg-white/35 text-white px-3 py-1 rounded-full font-semibold transition-all duration-200 border border-white/30"
                >
                  View Cart
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setShowToast(false);
                setToastProduct(null);
              }}
              className="text-white hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/25 transition-all duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Cart Component */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;