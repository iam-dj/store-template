import Link from 'next/link';
import { useCart } from '../context/CartContext';
import ShoppingCartIcon from '../../public/icons/ShoppingCartIcon.svg'; // Correct path to your SVG file

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white hover:text-gray-400">
              Products
            </Link>
          </li>
          <li className="relative">
            <Link href="/cart" className="text-white hover:text-gray-400">
              <div className="relative inline-block">
                <ShoppingCartIcon className="w-6 h-6 inline-block" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="text-white hover:text-gray-400">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
