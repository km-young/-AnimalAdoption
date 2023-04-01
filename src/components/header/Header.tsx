import React from 'react';
import style from './Header.module.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import Nav from './Nav';
const Header = () => {
  return (
    <>
      <div className={style.container}>
        <h1>펫샵대신</h1>
        <RxHamburgerMenu className={style.icon} />
      </div>
      <Nav />
    </>
  );
};

export default Header;
