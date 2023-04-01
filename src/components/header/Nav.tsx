import React from 'react';
import style from './Nav.module.scss';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHooks';
import {isNavModal} from '../../redux/slice/navModalSlice';
const Nav = () => {
  const isNav = useAppSelector((state) => state.navModal.isOpen);
  const sido = useAppSelector((state) => state.sido.items);
  console.log('sido: ', sido);

  return (
    <div
      className={style.container}
      style={isNav ? {display: 'flex'} : {display: 'none'}}
    >
      <div className={style.items}>
        <h3>지역</h3>
        <div className={style.item}>
          <select
            className={style.select}
            name='sido'
            id='sido-select'
            style={{width: '10rem'}}
          >
            <option value=''>전체</option>
            {sido.map((item) => (
              <option value={item.orgCd}>{item.orgdownNm}</option>
            ))}
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
            <option value=''>전체</option>
            <option value='6110000'>서울특별시</option>
            <option value='6410000'>경기도</option>
            <option value='6420000'>강원도</option>
            <option value='6280000'>인천광역시</option>
            <option value='6260000'>부산광역시</option>
            <option value='6270000'>대구광역시</option>
            <option value='6290000'>광주광역시</option>
            <option value='5690000'>세종특별자치시</option>
            <option value='6300000'>대전광역시</option>
            <option value='6310000'>울산광역시</option>
            <option value='6430000'>충청북도</option>
            <option value='6440000'>충청남도</option>
            <option value='6450000'>전라북도</option>
            <option value='6460000'>전라남도</option>
            <option value='6470000'>경상북도</option>
            <option value='6480000'>경상남도</option>
            <option value='6500000'>제주특별자치도</option>
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
