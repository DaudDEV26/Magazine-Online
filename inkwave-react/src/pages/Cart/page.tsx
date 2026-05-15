// src/pages/Cart/page.tsx
import { useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  category: string;
  price: number;
  quantity: number;
  img: string;
}

const initialItems: CartItem[] = [
  { id: 1, title: 'InkWave Premium Subscription',  category: 'Subscription', price: 9.99,  quantity: 1, img: '/images/tech.png'    },
  { id: 2, title: 'Tech Insights Monthly Bundle',   category: 'Bundle',       price: 14.99, quantity: 1, img: '/images/article.png' },
  { id: 3, title: 'Fashion Trends Digital Magazine',category: 'Magazine',     price: 4.99,  quantity: 2, img: '/images/fashion.png' },
];

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  function updateQty(id: number, delta: number) {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  }

  function removeItem(id: number) {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] min-h-screen transition-colors duration-300">
      <div className="w-full max-w-[1000px] mx-auto px-5">

        <h1 className="font-serif text-3xl text-[#1a1a2e] dark:text-white mb-10 text-center">
          Your Cart
          <span className="block w-16 h-[3px] bg-[#e94560] mx-auto mt-2.5"></span>
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🛒</p>
            <p className="text-xl text-[#888888] dark:text-[#a0a0b8]">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Items list */}
            <div className="flex-1 flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-5 flex gap-4 items-center transition-colors duration-300">
                  <img src={item.img} alt={item.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[#e94560] text-xs font-semibold uppercase">{item.category}</span>
                    <h3 className="font-serif text-base font-semibold text-[#1a1a2e] dark:text-white mt-0.5 truncate">{item.title}</h3>
                    <p className="text-[#e94560] font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 rounded-full bg-[#eef0f5] dark:bg-[#2a2a4a] text-[#1a1a2e] dark:text-white font-bold hover:bg-[#e94560] hover:text-white transition-colors duration-200">−</button>
                    <span className="w-6 text-center font-semibold text-[#1a1a2e] dark:text-white">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, +1)} className="w-8 h-8 rounded-full bg-[#eef0f5] dark:bg-[#2a2a4a] text-[#1a1a2e] dark:text-white font-bold hover:bg-[#e94560] hover:text-white transition-colors duration-200">+</button>
                  </div>
                  <p className="w-20 text-right font-bold text-[#1a1a2e] dark:text-white shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button onClick={() => removeItem(item.id)} className="text-[#888888] hover:text-[#e94560] transition-colors duration-200 text-xl shrink-0" aria-label="Remove">✕</button>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4 transition-colors duration-300">
                <h2 className="font-serif text-xl text-[#1a1a2e] dark:text-white font-bold">Order Summary</h2>
                <div className="flex justify-between text-sm text-[#4a4a6a] dark:text-[#c0c0d0]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-[#4a4a6a] dark:text-[#c0c0d0]">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-[#e0e0e0] dark:border-[#3a3a5a] pt-4 flex justify-between font-bold text-[#1a1a2e] dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full py-3 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-200 cursor-pointer">
                  Checkout
                </button>
                <button className="w-full py-3 rounded-full font-semibold border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition-colors duration-200 cursor-pointer">
                  Continue Shopping
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
