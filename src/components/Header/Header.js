import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Ema-John"/>
      <nav>
        <a href="/shop"><div>Shop</div></a>
        <a href="/review"><div>Order Review</div></a>
        <a href="manage"><div>Manage Inventory</div></a>
      </nav>
    </div>
  );
};

export default Header;