import React from 'react';
import style from './Header.module.scss';
import {RxHamburgerMenu} from 'react-icons/rx';
import Nav from '../select/Selects';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHooks';
import {isNavModal} from '../../redux/slice/navModalSlice';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={style.container}>
        <h1>펫샵대신</h1>
        <RxHamburgerMenu
          className={style.icon}
          onClick={() => dispatch(isNavModal())}
        />
      </div>
    </div>
  );
};

export default Header;
