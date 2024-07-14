import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Product from '../models/Product';
import sequelize from '../utils/db';

export async function getServerSideProps() {
  await sequelize.sync();
  const products = await Product.findAll();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default function Products({ products }) {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse our products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <ProductList products={products} />
      </main>
    </div>
  );
}
