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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const seeds = [
    { id: 'seed-new-2', name: 'Organic Rose Seeds', price: '₹999', emoji: '🌹', color: 'from-red-200 to-pink-400' },
    
    { id: 'seed-new-4', name: 'Gladiolus Mix', price: '₹40', emoji: '💐', color: 'from-pink-200 to-purple-400' },
    { id: 'seed-new-5', name: 'Asiatic Lily Orange', price: '₹80', emoji: '🌺', color: 'from-orange-200 to-red-400' },
    { id: 'seed-new-6', name: 'Sunflower Seeds', price: '₹499', emoji: '🌻', color: 'from-yellow-200 to-orange-400' },
    { id: 'seed-new-7', name: 'Pumpkin Seeds Dried', price: '₹899', emoji: '🎃', color: 'from-orange-100 to-orange-300' },
    { id: 'seed-new-8', name: 'Organic Pumpkin Seeds Raw', price: '₹599', emoji: '🎃', color: 'from-green-100 to-green-300' },
    { id: 'seed-new-9', name: 'Asiatic Lily Yellow', price: '₹80', emoji: '⚜️', color: 'from-yellow-100 to-yellow-300' },
    { id: 'seed-new-10', name: 'Asiatic Lily Pink', price: '₹80', emoji: '🌸', color: 'from-pink-200 to-pink-400' },
    { id: 'seed-new-11', name: 'Asiatic Lily Red', price: '₹80', emoji: '🌺', color: 'from-red-400 to-red-600' },
    { id: 'seed-new-12', name: 'Hyacinth Yellow', price: '₹120', emoji: '🪻', color: 'from-yellow-200 to-yellow-400' },
    { id: 'seed-new-13', name: 'Hyacinth White', price: '₹120', emoji: '🪻', color: 'from-gray-100 to-white' },
    { id: 'seed-new-14', name: '5 Mix Rose Seeds', price: '₹3,500', emoji: '🌹', color: 'from-red-200 to-pink-400' },
    { id: 'seed-new-15', name: '10 Mix Rose Flower Seeds', price: '₹5,000', emoji: '💐', color: 'from-pink-300 to-purple-500' },
    { id: 'seed-new-16', name: 'Ranunculus Pink', price: '₹899', emoji: '🏵️', color: 'from-pink-200 to-pink-400' },
    { id: 'seed-new-17', name: 'Ranunculus White', price: '₹899', emoji: '🏵️', color: 'from-gray-100 to-white' },
    { id: 'seed-new-18', name: 'Ranunculus Red', price: '₹899', emoji: '🏵️', color: 'from-red-400 to-red-600' },
    { id: 'seed-new-19', name: 'Freesia Red', price: '₹60', emoji: '⚘', color: 'from-red-300 to-red-500' },
    { id: 'seed-new-20', name: 'Hyacinth White (Premium)', price: '₹125', emoji: '🪻', color: 'from-gray-100 to-white' },
    { id: 'seed-new-21', name: 'Hyacinth Yellow (Premium)', price: '₹120', emoji: '🪻', color: 'from-yellow-200 to-yellow-400' },
    { id: 'seed-new-22', name: 'Lycoris Seeds', price: '₹80', emoji: '🪴', color: 'from-red-400 to-orange-500' },
    { id: 'seed-new-23', name: 'Calla Lily Pink', price: '₹150', emoji: '🌷', color: 'from-pink-200 to-pink-400' },
    { id: 'seed-new-24', name: 'Tuberose Seeds', price: '₹45', emoji: '🌾', color: 'from-green-100 to-white' },
    { id: 'seed-new-25', name: 'Calla Lily Yellow', price: '₹150', emoji: '🌷', color: 'from-yellow-200 to-yellow-400' },
    { id: 'seed-new-26', name: 'Hyacinth Pink', price: '₹135', emoji: '🪻', color: 'from-pink-200 to-purple-300' },
    { id: 'seed-new-27', name: 'Achimenes Red', price: '₹40', emoji: '🌺', color: 'from-red-400 to-red-600' },
    { id: 'seed-new-28', name: 'Achimenes Pink', price: '₹40', emoji: '🌺', color: 'from-pink-200 to-pink-400' },
    { id: 'seed-new-29', name: 'Achimenes White', price: '₹35', emoji: '🌺', color: 'from-gray-100 to-white' },
    { id: 'seed-new-30', name: 'Rain Lily Mix', price: '₹40', emoji: '🪷', color: 'from-pink-200 to-purple-400' },
    { id: 'seed-new-31', name: 'Nerine Lily Mix', price: '₹50', emoji: '⚜️', color: 'from-pink-300 to-red-400' },
  ];

  const fertilizers = [
    { id: 'fert-new-1', name: 'Organic Fertilizer Green', description: 'Premium organic fertilizer', price: '₹1,499', size: '1 kg', icon: '🍃' },
    { id: 'fert-new-2', name: 'Organic Homemade Upplas', description: 'Traditional organic fertilizer', price: '₹899', size: 'Pack', icon: '🍘' },
    { id: 'fert-new-3', name: 'Top Natural Fertilizer', description: 'High quality natural fertilizer', price: '₹2,500', size: '5 kg', icon: '🌱' },
  ];

  const addToCart = (product) => {
    const isExisting = cartItems.find((item) => item.id === product.id);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setToastProduct(product);
    setToastMessage(isExisting ? `${product.name} quantity updated!` : `${product.name} added to cart!`);
    setShowToast(true);
    setCartIconBounce(true);
    setTimeout(() => setCartIconBounce(false), 600);
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
    setIsCartOpen(false);
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
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <div className="text-3xl md:text-4xl float">🌱</div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient bg-clip-text">Seeds Gallery</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Seeds', 'Fertilizers', 'Sell', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-primary-600 transition-all duration-300 relative group font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={toggleCart}
                className={`relative btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white p-2 md:p-3 rounded-full hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow ${cartIconBounce ? 'cart-bounce' : ''}`}
              >
                <span className="text-xl md:text-2xl">🛒</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-pulse shadow-lg text-[10px] md:text-xs">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </button>
              <button className="hidden sm:block btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow">
                Get Started
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white p-2 rounded-full hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
              >
                <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-200">
            {['Home', 'Seeds', 'Fertilizers', 'Sell', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-2 btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-4 py-3 rounded-lg text-base font-semibold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32">
        <div className="text-center fade-in">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="text-5xl sm:text-6xl md:text-8xl float">🌻</div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            Grow Your Garden with
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-emerald-600 to-teal-600">
              Premium Seeds
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Discover a wide variety of flower seeds and organic fertilizers.
            Buy quality seeds or sell your own harvest. Your garden paradise starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <button className="w-full sm:w-auto btn-3d group relative overflow-hidden bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 glow shine">
              <span className="relative z-10">Browse Seeds</span>
            </button>
            <button className="w-full sm:w-auto btn-3d group relative overflow-hidden bg-white/90 backdrop-blur-sm text-primary-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold border-2 border-primary-600 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="relative z-10">Sell Your Seeds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-white/60 backdrop-blur-sm py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 scale-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4">Why Choose Seeds Gallery?</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We provide the best quality seeds and fertilizers for your gardening needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: '🌺', title: 'Premium Quality Seeds', desc: 'Hand-picked, high-germination rate seeds from trusted suppliers worldwide', delay: '0' },
              { icon: '🌿', title: 'Organic Fertilizers', desc: 'Natural, eco-friendly fertilizers to help your plants thrive and bloom', delay: '200' },
              { icon: '🛒', title: 'Buy & Sell Platform', desc: 'Easy marketplace to buy seeds or sell your own harvest to fellow gardeners', delay: '400' },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-3d group bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:from-green-100 hover:to-emerald-100 transition-all duration-500 border border-green-200/50 shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 float" style={{ animationDelay: `${index * 0.2}s` }}>{feature.icon}</div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors">{feature.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seeds Section */}
      <section id="seeds" className="relative z-10 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 scale-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4">Popular Flower Seeds</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Explore our collection of beautiful flower seeds</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {seeds.map((seed, index) => (
              <div
                key={index}
                className="card-3d group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${seed.color} p-8 sm:p-10 md:p-12 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-2 sm:mb-4 relative z-10 float" style={{ animationDelay: `${index * 0.1}s` }}>
                    {seed.emoji}
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-white">
                  <h4 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors">{seed.name}</h4>
                  <p className="text-primary-600 font-bold text-xl sm:text-2xl mb-3 sm:mb-4">{seed.price}</p>
                  <button
                    onClick={() => addToCart(seed)}
                    className="w-full bg-gradient-to-r from-primary-600 to-emerald-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow shine"
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
      <section id="fertilizers" className="relative z-10 bg-white/60 backdrop-blur-sm py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 scale-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4">Organic Fertilizers</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Nourish your plants with our premium organic fertilizers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {fertilizers.map((fertilizer, index) => (
              <div
                key={index}
                className="card-3d group bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:from-emerald-100 hover:via-green-100 hover:to-teal-100 transition-all duration-500 border border-emerald-200/50 shadow-xl hover:shadow-2xl"
              >
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 float" style={{ animationDelay: `${index * 0.2}s` }}>{fertilizer.icon}</div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{fertilizer.name}</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{fertilizer.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500 block mb-1">Size: {fertilizer.size}</span>
                    <span className="text-lg sm:text-xl font-bold text-primary-600">{fertilizer.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(fertilizer)}
                    className="bg-white text-primary-600 p-2 sm:p-3 rounded-full hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg border border-primary-100"
                  >
                    <span className="text-xl">➕</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Your Seeds Section */}
      <section id="sell" className="relative z-10 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass bg-gradient-to-br from-primary-50 via-emerald-50 to-teal-50 rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-16 border border-primary-200/50 shadow-2xl">
            <div className="text-center mb-8 sm:mb-12">
              <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 float">🌾</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6">Sell Your Seeds</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Have quality seeds to share? Join our marketplace and connect with gardeners worldwide!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                { icon: '📸', title: 'List Your Products', desc: 'Upload photos and details of your seeds' },
                { icon: '💰', title: 'Set Your Price', desc: 'You control the pricing and availability' },
                { icon: '🚀', title: 'Start Selling', desc: 'Reach thousands of potential buyers' },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 bounce" style={{ animationDelay: `${index * 0.2}s` }}>{step.icon}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 glow shine">
                Start Selling Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-white/60 backdrop-blur-sm py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 scale-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4">About Seeds Gallery</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Your trusted partner in creating beautiful gardens and sustainable agriculture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="card-3d bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 float">🌍</div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Our Mission</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To make quality seeds accessible to everyone and promote sustainable gardening practices worldwide.
                </p>
              </div>
              <div className="card-3d bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 float">✨</div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Our Vision</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  A world where every garden flourishes with diverse, healthy plants grown from premium seeds.
                </p>
              </div>
            </div>
            <div className="card-3d bg-gradient-to-br from-green-50 to-emerald-50 p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="text-6xl sm:text-7xl mb-4 sm:mb-6 text-center float">🌱</div>
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Why Choose Us?</h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Premium quality seeds from trusted suppliers',
                  'Organic and eco-friendly fertilizers',
                  'Expert gardening advice and support',
                  'Fast and secure delivery',
                  'Satisfaction guaranteed',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl sm:text-2xl flex-shrink-0">✓</span>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-gray-300 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🌱</div>
                <span className="text-xl font-bold text-white">Seeds Gallery</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Your one-stop shop for premium seeds and fertilizers
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Seeds', href: '#seeds' },
                  { name: 'Fertilizers', href: '#fertilizers' },
                  { name: 'Sell', href: '#sell' },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Contact Us', href: '#' },
                  { name: 'FAQ', href: '#' },
                  { name: 'Shipping Info', href: '#' },
                  { name: 'Returns', href: '#' },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Connect</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Facebook', href: '#' },
                  { name: 'Instagram', href: '#' },
                  { name: 'Twitter', href: '#' },
                  { name: 'Email', href: '#' },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-sm text-gray-500">
              © 2024 Seeds Gallery. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
      />

      {/* Toast Notification */}
      {showToast && toastProduct && (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 toast-enter left-4 sm:left-auto">
          <div className="bg-gradient-to-r from-primary-600 via-emerald-600 to-teal-600 text-white px-4 sm:px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 w-full sm:min-w-[350px] sm:max-w-[400px] border-2 border-white/30 backdrop-blur-sm">
            <div className="text-4xl sm:text-5xl animate-bounce-in float flex-shrink-0" style={{ animationDelay: '0s' }}>{toastProduct.emoji || toastProduct.icon || '✅'}</div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm sm:text-base md:text-lg mb-1 text-white truncate">{toastMessage}</p>
              <div className="flex items-center justify-between mt-2 gap-2">
                <p className="text-white/95 text-xs sm:text-sm">Price: <span className="font-semibold text-white">{toastProduct.price}</span></p>
                <button
                  onClick={() => {
                    setShowToast(false);
                    setIsCartOpen(true);
                  }}
                  className="text-[10px] sm:text-xs bg-white/25 hover:bg-white/35 text-white px-2 sm:px-3 py-1 rounded-full font-semibold transition-all duration-200 border border-white/30 whitespace-nowrap"
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
              className="text-white hover:text-white text-xl sm:text-2xl font-bold w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-white/25 transition-all duration-200 flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-multiply filter blur-[1px] transition-transform duration-100 hidden md:block"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%)',
          transform: 'scale(1.5)',
        }}
      />
    </div>
  );
}

export default App;