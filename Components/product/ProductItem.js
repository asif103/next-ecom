import Link from "next/link";

const ProductItem = ({ product }) => {
  const userLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a className="btn btn-info flex-fill mx-1">view</a>
        </Link>
        <button className="btn btn-success flex-fill mx-1">Buy now</button>
      </>
    );
  };
  console.log(product);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.images[0].url}
        className="card-img-top"
        alt={product.images[0].url}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6>$ {product.price}</h6>
        {product.inStock > 0 ? (
          <h6>
            In Stock: <span className="text-success">{product.inStock}</span>
          </h6>
        ) : (
          <h6 className="text-danger">Out of Stock</h6>
        )}
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between">{userLink()}</div>
      </div>
    </div>
  );
};

export default ProductItem;
