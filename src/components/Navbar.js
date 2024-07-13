import Link from 'next/link';

export default function Navbar() {
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
          <li>
            <Link href="/cart" className="text-white hover:text-gray-400">
              Cart
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
