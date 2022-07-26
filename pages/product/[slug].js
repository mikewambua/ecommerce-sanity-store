import Image from 'next/image';
import React, { useState } from 'react';
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';

import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product, products }) => {
  const { image, name, price, details } = product;
  const [index, setIndex] = useState(0);

  const {
    increaseQuantity,
    decreaseQuantity,
    quantity,
    onAddToCart,
    setShowCart,
  } = useStateContext();

  const handleBuyNow = () => {
    onAddToCart(product, quantity);

    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              alt={name}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
                alt={name}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>17</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decreaseQuantity}>
                <AiOutlineMinus />
              </span>
              <span className="num">{quantity}</span>
              <span className="plus" onClick={increaseQuantity}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              className="add-to-cart"
              onClick={() => onAddToCart(product, quantity)}
            >
              Add to cart
            </button>
            <button className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* Recommended products */}
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
    slug {
      current
    }
    }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
  const productsQuery = '*[_type=="product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log('Store', product);
  return { props: { products, product } };
};

export default ProductDetails;
