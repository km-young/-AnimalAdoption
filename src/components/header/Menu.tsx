import { useAppSelector } from '@/hooks/reduxHooks';
import React from 'react'
import style from './Menu.module.scss'


const Menu = () => {
    const isMenu = useAppSelector((state) => state.navModal);
  console.log( 'isMenu: ' ,isMenu);
  
  return (
    <div className={style.container} style={isMenu.isOpen? {display:"block"} : {display:"none"}}>
      <ul>
        <li>찜한 글</li>
        <li>입양 후기</li>
        <li>고객센터</li>
      </ul>
    </div>
  );
}

export default Menu