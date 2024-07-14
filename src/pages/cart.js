import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (productId, quantity) => {
    removeFromCart(productId, quantity);
  };

  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="description" content="View your cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                  <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                  <p className="mt-1 text-gray-600">{product.description}</p>
                  <p className="mt-2 text-green-500 font-semibold">
                    ${product.price} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}
                  </p>
                  <div className="mt-4 flex space-x-2 items-center">
                    <input
                      type="number"
                      min="1"
                      max={product.quantity}
                      defaultValue="1"
                      className="w-16 p-1 border rounded"
                      id={`remove-quantity-${product.id}`}
                    />
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                      onClick={() => {
                        const quantity = parseInt(document.getElementById(`remove-quantity-${product.id}`).value);
                        handleRemoveItem(product.id, quantity);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-right">
              <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
            </div>
            <div className="mt-8 text-center">
              <Link href="/checkout">
                <button className="px-8 py-4 bg-blue-500 text-white text-xl rounded hover:bg-blue-700">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
