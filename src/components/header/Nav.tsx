import React from 'react';
import style from './Nav.module.scss';
const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.items}>
        <h3>지역</h3>
        <div className={style.item}>
          <select
            className={style.select}
            name='sido'
            id='sido-select'
            style={{width: '10rem'}}
          >
            <option value='0'>전국</option>
            <option value='1'>서울특별시</option>
          </select>
        </div>
      </div>

      <div className={style.items}>
        <h3>품종</h3>
        <div className={style.item}>
          <select
            className={style.select}
            name='sido'
            id='sido-select'
            style={{width: '35%'}}
          >
            <option value='0'>전체</option>
            <option value='1'>강아지</option>
            <option value='2'>고양이</option>
            <option value='3'>기타</option>
          </select>

          <select
            className={style.select}
            name='sido'
            id='sido-select'
            style={{width: '60%'}}
          >
            <option value='0'>전체</option>
            <option value='1'>서울특별시</option>
          </select>
        </div>
      </div>

      <div className={style.items}>
        <h3>중성화</h3>
        <div className={style.item}>
          <div className={style.tag}>중성화O</div>
          <div className={style.tag}>중성화X</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
