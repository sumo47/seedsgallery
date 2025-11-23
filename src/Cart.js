import React from 'react';

function Cart({ isOpen, onClose, cartItems, updateQuantity, removeItem, clearCart }) {
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[₹,]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="glass bg-gradient-to-r from-primary-600 to-emerald-600 p-4 sm:p-6 text-white">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                <span>🛒</span> <span className="hidden sm:inline">Shopping Cart</span>
                <span className="sm:hidden">Cart</span>
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-white transition-all duration-200 text-3xl sm:text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 border-2 border-white shadow-lg"
                aria-label="Close cart"
              >
                ×
              </button>
            </div>
            <p className="text-sm sm:text-base text-white/90">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
            </p>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="text-6xl sm:text-8xl mb-4 opacity-50">🛒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-sm sm:text-base text-gray-500">Add some products to get started!</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="card-3d bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="text-3xl sm:text-4xl flex-shrink-0">{item.emoji || item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1 truncate">{item.name}</h4>
                        {item.description && (
                          <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                        )}
                        {item.size && (
                          <p className="text-xs text-gray-500 mb-2">Size: {item.size}</p>
                        )}
                        <div className="flex items-center justify-between mt-2 sm:mt-3">
                          <p className="text-primary-600 font-bold text-base sm:text-lg">{item.price}</p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-primary-600 text-primary-600 font-bold hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                            >
                              −
                            </button>
                            <span className="w-8 sm:w-10 text-center font-semibold text-sm sm:text-base text-gray-900">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="mt-2 text-red-600 hover:text-red-700 text-xs sm:text-sm font-medium transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-semibold text-gray-700">Total:</span>
                <span className="text-xl sm:text-2xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={() => {
                    alert('Checkout functionality would be implemented here!');
                  }}
                  className="w-full btn-3d bg-gradient-to-r from-primary-600 to-emerald-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:from-primary-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl glow shine"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 text-gray-700 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-300 transition-all duration-300"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;

