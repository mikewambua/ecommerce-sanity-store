import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { runFireWorks } from '../lib/utils';
import { useStateContext } from '../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:micaiahdev@gmail.com">
            micaiahdev@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn" width={250}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
