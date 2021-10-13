import Head from "next/head";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Header from "../components/Header";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG.png" />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
