import React from 'react';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy;2022 Micaiah E-Store. All rights reserved</p>
      <p>
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
