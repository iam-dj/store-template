import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Products() {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse our products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        {/* Product list will go here */}
      </main>
    </div>
  );
}
