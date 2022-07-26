import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../lib/client';

import headphones from '../public/headphone.png';
const HeroBanner = ({
  heroBanner: {
    smallText,
    midText,
    desc,
    largeText1,
    image,
    product,
    buttonText,
  },
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        {/* Use Image tag in next instead of img */}
        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />
        <div>
          <Link href={`product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
