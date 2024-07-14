import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Notification from './Notification';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setNotificationVisible(true);
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="mt-1 text-gray-600">{product.description}</p>
      <p className="mt-2 text-green-500 font-semibold">${product.price}</p>
      <div className="mt-4">
        <label className="block mb-2">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="w-16 p-1 border rounded"
        />
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <Notification
        message="Item added to cart!"
        visible={notificationVisible}
        onClose={() => setNotificationVisible(false)}
      />
    </div>
  );
}
