import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout Summary</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div className="max-w-2xl mx-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 border-b text-left">Item</th>
                  <th className="py-2 border-b text-right">Price</th>
                  <th className="py-2 border-b text-right">Quantity</th>
                  <th className="py-2 border-b text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 border-b">{product.name}</td>
                    <td className="py-2 border-b text-right">${product.price.toFixed(2)}</td>
                    <td className="py-2 border-b text-right">{product.quantity}</td>
                    <td className="py-2 border-b text-right">${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-2 text-right font-bold" colSpan="3">
                    Grand Total
                  </td>
                  <td className="py-2 text-right font-bold">${calculateTotal()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
