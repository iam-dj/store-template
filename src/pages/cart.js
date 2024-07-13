import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Cart() {
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="description" content="View your cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        {/* Cart details will go here */}
      </main>
    </div>
  );
}
