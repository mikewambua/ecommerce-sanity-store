import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '../lib/client';

const FooterBanner = ({
  FooterBanner: {
    product,
    image,
    discount,
    largeText1,
    largeText2,
    smallText,
    midText,
    saleTime,
    desc,
    buttonText,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        {/* Use Image tag in Next instead of img tag */}
        <img
          src={urlFor(image)}
          alt="headphones"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
