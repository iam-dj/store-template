import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout your order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        {/* Checkout form will go here */}
      </main>
    </div>
  );
}
