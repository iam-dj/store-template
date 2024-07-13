import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Store</title>
        <meta name="description" content="Welcome to my online store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to My Store</h1>
      </main>
    </div>
  );
}
