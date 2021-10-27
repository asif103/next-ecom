import { useState } from "react";
import { getData } from "./../Utils/fetchData";
import Head from "next/head";
import ProductItem from "../Components/product/ProductItem";

const Home = (props) => {
  const [products, setProducts] = useState(props.products);
  console.log(products);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <div className="products">
          {products.length === 0 ? (
            <h2>No products</h2>
          ) : (
            products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData("product");
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}

export default Home;
