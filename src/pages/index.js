import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductModal from '../components/ProductModal';
import { getProducts } from '../utils/api'; // Create this function to fetch products

export default function Home() {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts(); // Assume this function fetches products from the API
      setProducts(products);
    }

    fetchProducts();
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <Head>
        <title>My Store</title>
        <meta name="description" content="Welcome to my store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <section className="relative w-full h-96">
          <img
            src="/path/to/your/hero-image.jpg" // Replace with your hero image path
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative w-full h-full flex items-center justify-start bg-black bg-opacity-50 p-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold">My Store</h1>
              <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </section>
        <section className="mt-8 p-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
          <div className="flex overflow-x-scroll space-x-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-60 flex-shrink-0 border rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleOpenModal(product)}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-green-500 font-semibold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {selectedProduct && (
        <ProductModal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
